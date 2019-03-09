"""application URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.urls import path, re_path
from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings

from .views import HomeView

urlpatterns = [
    path(r'^admin/', admin.site.urls),
    re_path(r'$', HomeView.as_view(), name='home')
]

"""
Will on debug mode you can use this ways to load static file, Thing to avide on production
"""
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)


"""
Use this link if you dont want django to support HTTP Request/Response,

This process will be handled by your front-end framework ( eg:. Reactjs) in my case i use reactjs 
"""

urlpatterns += [
    re_path(r'(?P<path>.*)', HomeView.as_view(), name='home')  # use this link
]
