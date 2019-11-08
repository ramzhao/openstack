import os
import requests
import json

from openstack.api.config import *
from openstack.api.config import hello as hello1


def get_token(domain, user, password):
    hello1()
    body = {
        "auth": {
            "identity": {
                "methods": [
                    "password"
                ],
                "password": {
                    "user": {
                        "name": user,
                        "domain": {
                            "name": domain
                        },
                        "password": password
                    }
                }
            }
        }
    }
    print(json.dumps(body))
    res = requests.post(identity_public_URL + '/auth/tokens', data=json.dumps(body))
    print(eval(res.text))
    print(res.headers)


    try:
        if eval(res.text)['error']['message']:
            message = eval(res.text)['error']['message']
            code = eval(res.text)['error']['code']
            print(code)
            return {'token': code}
    except KeyError:
        user_id = eval(res.text)['token']['user']['id']
        print(res.headers['X-Subject-Token'])
        return {'token': res.headers['X-Subject-Token'],'user_id': user_id}



def get_projects(f_token):
    header = {'X-Auth-Token': f_token}
    res = requests.get(identity_public_URL + '/auth/projects', headers=header)
    res = json.loads(res.text)
    project_id = res['projects'][0]['id']
    domain_id = res['projects'][0]['domain_id']
    print("项目" + project_id)
    print("域id" + domain_id)
    return project_id


def get_s_token(project_id,user_id,password):
    body = {
        "auth": {
            "identity": {
                "methods": [
                    "password"
                ],
                "password": {
                    "user": {
                        "id": user_id,
                        "password": password
                    }
                }
            },
            "scope": {
                "project": {
                    "id": project_id
                }
            }
        }
    }
    print(json.dumps(body))
    res = requests.post(identity_public_URL + '/auth/tokens', data=json.dumps(body))
    print(eval(res.text))
    print(res.headers)

    try:
        if eval(res.text)['error']['message']:
            message = eval(res.text)['error']['message']
            code = eval(res.text)['error']['code']
            print(code)
            return code
    except KeyError:
        print(res.headers['X-Subject-Token'])

        return res.headers['X-Subject-Token']
