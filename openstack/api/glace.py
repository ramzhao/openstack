from openstack.api.config import *
from openstack.api.keystone import get_token
import requests
import json

from openstack.api.config import Glance_URL

def get_images_one(request,id):
    token = request.session.get("token")
    header = {'X-Auth-Token': token}
    res = requests.get(Glance_URL + '/v2/images/'+id, headers=header)
    image_name = json.loads(res.text)['name']
    return image_name

def get_images_list(request):
    token = request.session.get("token")
    header = {'X-Auth-Token': token}
    res = requests.get(Glance_URL + '/v2/images', headers=header)
    print("==" + res.text)
    images_dict = json.loads(res.text)

    print(images_dict['images'][0]['name'])
    print(images_dict['images'][0]['status'])
    print(images_dict['images'][0]['size'])
    print(images_dict['images'][0]['disk_format'])
    print(images_dict['images'][0]['protected'])
    print(images_dict['images'][0]['visibility'])
    print(len(images_dict['images']))

    images_list = []
    for i in range(0, len(images_dict['images'])):
        if images_dict['images'][i]['protected']:
            protected = '是'
        else:
            protected = '否'

        if images_dict['images'][i]['visibility'] == 'public':
            visibility = '是'
        else:
            visibility = '否'

        if images_dict['images'][i]['status'] == 'active':
            status = '活动'
        else:
            status = '停用'

        try:
            description = images_dict['images'][i]['description']
        except KeyError:
            description = ''

        try:
            architecture = images_dict['images'][i]['architecture']
        except KeyError:
            architecture = ''

        images_one = {
            "id": images_dict['images'][i]['id'],
            "name": images_dict['images'][i]['name'],
            "status": status,
            "size": str(round(int(images_dict['images'][i]['size']) / 1024 / 1024, 1)) + ' MB',
            "disk_format": images_dict['images'][i]['disk_format'],
            "protected": protected,
            "visibility": visibility,
            "minimum_disk": images_dict['images'][i]['min_disk'],
            "minimum_ram": images_dict['images'][i]['min_ram'],
            "description": description,
            "architecture": architecture

        }

        images_list.append(images_one)
    print(images_list)
    return images_list


def delete_one_image(request, image_id):
    token = request.session.get("token")
    header = {'X-Auth-Token': token}
    res = requests.delete(Glance_URL + '/v2/images/' + image_id, headers=header)
    print("删除镜像url:" + Glance_URL + '/v2/images/' + image_id)
    print("删除镜像返回" + res.text)
    print("返回code：" + str(res.status_code))
    return res.status_code


def create_image(request, new_image_dict):
    token = request.session.get("token")
    header = {'X-Auth-Token': token}
    body = {
        # 'container_format': '',
        'disk_format': '',
        'min_disk': '',
        'min_ram': '',
        'name': '',
        'protected': '',
        'visibility': '',
        # 'tags': '',
        'description': '',
        'architecture': '',



    }
    res = requests.post(Glance_URL + '/v2/images', headers=header, data=json.dumps(body))

    def uplaod_image():
        return 1

    uplaod_image()

    return 1
