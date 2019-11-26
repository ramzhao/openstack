import requests
import json

from openstack.api.config import Neutron_URL


# 获取网络列表
def get_networks_list(request):
    token = request.session.get("token")
    header = {'X-Auth-Token': token}
    res = requests.get(Neutron_URL + '/v2.0/networks', headers=header)
    networks_dict = json.loads(res.text)

    print("网络列表：")
    print(networks_dict)

    print(len(networks_dict['networks']))
    print(networks_dict['networks'][0]['name'])
    print(networks_dict['networks'][0]['status'])
    print(networks_dict['networks'][0]['shared'])
    print(networks_dict['networks'][0]['admin_state_up'])
    print(networks_dict['networks'][0]['router:external'])

    networks_list = []
    for i in range(0, len(networks_dict['networks'])):
        # 获取子网id
        subnet_id = networks_dict['networks'][i]['subnets'][0]

        subnet_cidr = getSubnetInfo(request,subnet_id)

        networks_one = {
            "id": networks_dict['networks'][i]['id'],
            "name": networks_dict['networks'][i]['name'],
            "status": networks_dict['networks'][i]['status'],
            "project": 'admin',
            "admin_state_up": str(networks_dict['networks'][i]['admin_state_up']),
            "cidr": 'cidr',
            "shared": str(networks_dict['networks'][i]['shared']),
            "external": str(networks_dict['networks'][i]['router:external'])
        }

        networks_list.append(networks_one)
    print(networks_list)
    return networks_list

# 获取子网信息
def getSubnetInfo(request,subnet_id):
    token = request.session.get("token")
    header = {'X-Auth-Token': token}
    res = requests.get(Neutron_URL + '/v2.0/subnets/'+subnet_id, headers=header)
    subnet_dict = json.loads(res.text)

    print("子网信息：")
    print(subnet_dict)

    # print(len(subnet_dict['subnet']))
    # print(subnet_dict['subnet'][0]['name'])
    # print(subnet_dict['subnet'][0]['status'])
    # print(subnet_dict['subnet'][0]['shared'])
    # print(subnet_dict['subnet'][0]['admin_state_up'])
    # print(subnet_dict['subnet'][0]['router:external'])

        # 获取子网id
    cidr = subnet_dict['subnet']['cidr']

        # networks_one = {
        #     "id": networks_dict['networks'][i]['id'],
        #     "name": networks_dict['networks'][i]['name'],
        #     "status": networks_dict['networks'][i]['status'],
        #     "project": 'admin',
        #     "admin_state_up": networks_dict['networks'][i]['admin_state_up'],
        #     "cidr": 'cidr',
        #     "shared": networks_dict['networks'][i]['shared'],
        #     "external": networks_dict['networks'][i]['router:external']
        # }

    print(cidr)
    return cidr
