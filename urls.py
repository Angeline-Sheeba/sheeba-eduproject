
from django.urls import path
from .import views

urlpatterns = [
    path('vendorhome', views.vendorhome),
    path('vendorlogin', views.vendorlogin),
    path('vendorlogintask', views.vendorlogintask),
    path('Insert', views.Insert),
    path('addproduct', views.addproduct),
    path('viewproduct', views.viewproduct),
    path('vieworder', views.vieworder),
    path('viewstock', views.viewstock),  
    path('vendorregister', views.vendorregister),
    path('vendororder', views.vendororder),
    path('vendorproduct', views.vendorproduct),
    path('vendorviewproduct', views.vendorviewproduct),
    path('vendorstock', views.vendorstock),
    path('vendorcustomer', views.vendorcustomer),
    
   
   # path('subAppurls/',include('myApp1.urls'))
]
