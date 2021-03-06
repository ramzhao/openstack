"""untitled1 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from openstack import views
from django.views.generic import TemplateView

urlpatterns = [
    path('', TemplateView.as_view(template_name="index.html")),
    path('admin/', admin.site.urls),
    path('api/getImageList', views.getImageList),
    path('api/login', views.login),
    path('api/images/delete_one', views.deleteImageOne),
    path('api/getNetworksList', views.getNetworkList),
    path('api/getServersList', views.getServersList),
    path('api/getFlavorsList',views.getFlavorsList),
    path('api/createServer', views.createServer),
    path('api/deleteServer', views.deleteServer),
    path('api/server/StartServerOne', views.startServerOne),
    path('api/server/StopServerOne', views.stopServerOne),
    path('api/server/RebootServerOne', views.rebootServerOne),
    path('api/server/PauseServerOne', views.pauseServerOne),
    path('api/server/UnpauseServerOne', views.unpauseServerOne),
    path('api/server/GetRemoteConsoles', views.getRemoteConsoles)

]
