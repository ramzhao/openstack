import requests
import json
from openstack.api.config import Nova_URL
from openstack.api.glace import get_images_list, get_images_one


def create_server(request):
    token = request.session.get("token")
    header = {'X-Auth-Token': token}

    server_info = {
        "server": {
            "name": "new-server-test",
            "imageRef": "fe3bb837-8c39-4011-903f-809d7b374aa7",
            "flavorRef": "1",
            "availability_zone": "nova",
            "OS-DCF:diskConfig": "AUTO",
            "networks": [{
                "uuid": "405d6294-d47c-42ac-86bd-4b0d9caa5bd0"
            }],

            "security_groups": [
                {
                    "name": "default"
                }
            ]
        }
    }
    res = requests.post(Nova_URL + '/v2.1/servers', headers=header, data=json.dumps(server_info))
    print(type(res.status_code))
    return res.status_code


def get_servers_list(request):
    token = request.session.get("token")
    header = {'X-Auth-Token': token}
    res = requests.get(Nova_URL + '/v2.1/servers/detail', headers=header)
    print(res.text)
    servers_dict = json.loads(res.text)

    servers_dict = servers_dict['servers']
    print(servers_dict)
    servers_list = []
    for i in range(0, len(servers_dict)):
        flavor_name = get_flavor_info(request, servers_dict[0]['flavor']['id'])

        server_one = {
            "name": servers_dict[i]['name'],
            "image_name": get_images_one(request, servers_dict[i]['image']['id']),
            "ip_addr": servers_dict[i]['addresses']['provider'][0]['addr'],
            "flavor_name": flavor_name,
            "key_name": str(servers_dict[i]['key_name']),
            "status": servers_dict[i]['OS-EXT-STS:vm_state'],
            "availability_zone": servers_dict[i]['OS-EXT-AZ:availability_zone'],
            "task_state": str(servers_dict[i]['OS-EXT-STS:task_state']),
            "power_state": servers_dict[i]['OS-EXT-STS:power_state'],
            "time": servers_dict[i]['created'],
            'id':servers_dict[i]['id']
        }

        servers_list.append(server_one)
        print(servers_list)

    return servers_list


def get_flavor_info(request, id):
    token = request.session.get("token")
    header = {'X-Auth-Token': token}
    res = requests.get(Nova_URL + '/v2.1/flavors/' + id, headers=header)
    flavor_dict = json.loads(res.text)['flavor']
    flavor_name = flavor_dict['name']
    return flavor_name


def get_remote_consoles(request,id):
    body = {
    "os-getVNCConsole": {
        "type": "novnc"
    }
}
    print(json.dumps(body))
    token = request.session.get("token")
    header = {'X-Auth-Token': token}
    res = requests.post(Nova_URL + '/v2.1/servers/'+id +'/action', data=json.dumps(body),headers=header)
    print(eval(res.text))
    print(res.headers)
    remote_dict = json.loads(res.text)
    if(res.status_code==200):
        return remote_dict['console']['url']
    else:
        return 'error'

def start_server(request,id):
    body = {
    "os-start" : None
}
    print(json.dumps(body))
    token = request.session.get("token")
    header = {'X-Auth-Token': token}
    res = requests.post(Nova_URL + '/v2.1/servers/'+id +'/action', data=json.dumps(body),headers=header)
    print(Nova_URL + '/v2.1/servers/'+id +'/action')

    print(res.headers)
    print('启动服务器')
    print(res.status_code)
    return res.status_code

def reboot_server(request,id,action):
    body = {
    "reboot" : {
        "type" : action
    }
}
    print(json.dumps(body))
    token = request.session.get("token")
    header = {'X-Auth-Token': token}
    res = requests.post(Nova_URL + '/v2.1/servers/'+id+'/action', data=json.dumps(body),headers=header)

    print(res.headers)
    print('重启服务器')
    print(res.status_code)
    return res.status_code

def pause_server(request, id):
    body = {
    "pause": None
}
    print(json.dumps(body))
    token = request.session.get("token")
    header = {'X-Auth-Token': token}
    res = requests.post(Nova_URL + '/v2.1/servers/' + id + '/action', data=json.dumps(body), headers=header)
    print('暂停服务器')
    print(res.status_code)
    return res.status_code

def stop_server(request, id):
    body = {
    "os-stop" : None
}
    print(json.dumps(body))
    token = request.session.get("token")
    header = {'X-Auth-Token': token}
    res = requests.post(Nova_URL + '/v2.1/servers/' + id + '/action', data=json.dumps(body), headers=header)
    print('停止服务器')
    print(res.status_code)
    return res.status_code

def unpause_server(request, id):
    body = {
    "unpause": None
}
    print(json.dumps(body))
    token = request.session.get("token")
    header = {'X-Auth-Token': token}
    res = requests.post(Nova_URL + '/v2.1/servers/' + id + '/action', data=json.dumps(body), headers=header)
    print('取消暂停服务器')
    print(res.status_code)
    return res.status_code

