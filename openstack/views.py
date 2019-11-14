import json

from django.http import HttpResponse
from django.shortcuts import redirect

from openstack.api.compute import get_servers_list, create_server
from openstack.api.glace import get_images_list, delete_one_image, create_image
from openstack.api.keystone import get_token, get_projects, get_s_token
from openstack.api.network import get_networks_list


def check_login(func):
    def check(*args, **kwargs):
        if args[0].session.get('is_login', None):
            return func(*args, **kwargs)
        else:
            return HttpResponse('not login in')

    return check


def login(request):
    if (request.method == 'POST'):
        username = request.POST['user']
        password = request.POST['pass']
        domain = request.POST['domain']
        print(get_token(domain, username, password))
        print([username, password, domain])
        token_dict = get_token(domain, username, password)
        token = token_dict['token']

        if token == 401:
            return HttpResponse('401')
        else:
            user_id = token_dict['user_id']
            project_id = get_projects(token)
            s_token = get_s_token(project_id, user_id, password)

            request.session['is_login'] = True
            request.session['user'] = username

            request.session['token'] = s_token
            response = HttpResponse('success')
            response.set_cookie('username', username)  # 临时cookie
            return response

    else:
        return HttpResponse('error: only post')


@check_login
def logout(request):  # 撤销
    request.session.clear()  # 删除session里的全部内容
    response = HttpResponse('logout')
    response.set_cookie('username', '')  # 临时cookie
    return response


@check_login
def getImageList(request):
    print('---------------------------')
    print(request.session.get('token'))
    images_list = get_images_list(request)
    return HttpResponse(json.dumps(images_list))


@check_login
def deleteImageOne(request):
    image_id = request.GET['image_id']
    print(image_id)
    res = delete_one_image(request, image_id)
    return HttpResponse(res)


@check_login
def createImage(request):
    if request.method == 'POST':
        new_image_dict: {
            'format': request.POST['format'],
            'name': request.POST['name'],
            'description': request.POST['description'],
            'image_location': request.POST['image_location'],
            'architecture': request.POST['architecture'],
            'minimum_ram': request.POST['minimum_ram'],
            'minimum_disk': request.POST['minimum_disk'],
            'protected': request.POST['protected'],
            'public': request.POST['public'],
            'copy_data': request.POST['copy_data'],
            'image_file': request.FILES.get['files']
        }

        res = create_image(request, new_image_dict)
        return HttpResponse(res)

@check_login
def getNetworkList(request):
    return HttpResponse(json.dumps(get_networks_list(request)))

@check_login
def getServersList(request):
    return HttpResponse(json.dumps(get_servers_list(request)))

def createServer(request):
    return HttpResponse(create_server(request))
