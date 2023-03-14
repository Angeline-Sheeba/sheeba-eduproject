#from django.http import HttpResponse
import mysql.connector as mysql
from django.shortcuts import redirect
from django.shortcuts import render
def vendorhome(req):
   # return HttpResponse("<h1 style=color:Red;>Welcome to my Home Page</h1>")
   return render(req,'vendorhome.html')
def vendorlogin(req):
   return render(req,'vendorlogin.html')
def vendorregister(req):
   return render(req,'vendorregister.html')
def vendororder(req):
   return render(req,'vendororder.html')
def vendorproduct(req):
   return render(req,'vendorproduct.html')
def vendorviewproduct(req):
   return render(req,'vendorviewproduct.html')
def vendorstock(req):
   return render(req,'vendorstock.html')
def vendorcustomer(req):
   return render(req,'vendorcustomer.html')
def Insert(req):     
    Name=req.GET.get('Name')        
    Email=req.GET.get('Email')     
    pwd=req.GET.get('pwd') 
    addr=req.GET.get('addr')   
    mobno=req.GET.get('mobno')   
    # To establish connection b/w Python and DB.     
    conn= mysql.connect(host="localhost",user="root",password="root123",database="outfitdb")
    cr=conn.cursor()      
    query="insert into vendortb values('{0}','{1}','{2}','{3}',{4})".format(Name,Email,pwd,addr,mobno) 
    cr.execute(query)     
    conn.commit()     
    conn.close()     
    #return redirect('/customerlogin')
    return render(req,'vendorlogin.html')
def vendorlogintask(req):      
    Email=req.GET.get("Email")      
    Pwd=req.GET.get("pwd")            
    conn=mysql.connect(host="localhost",user="root",password="root123",database="outfitdb")      
    cr=conn.cursor()      
    cr.execute("select * from vendortb")            
    while True:           
        row=cr.fetchone()          
        print("rowvalue",row)
        if row is None:                
            break;           
        elif row[1]==Email and row[2]==Pwd:                
            return redirect('/outfitvendor/vendorhome')
        return redirect('/outfitvendor/vendorlogin')
def addproduct(req):
   PName=req.GET.get('PName')        
   BName=req.GET.get('BName')     
   category=req.GET.get('category') 
   price=req.GET.get('price')   
   stock=req.GET.get('stock')   
    # To establish connection b/w Python and DB.     
   conn= mysql.connect(host="localhost",user="root",password="root123",database="outfitdb")
   cr=conn.cursor()      
   query="insert into producttb values('{0}','{1}','{2}',{3},{4})".format(PName,BName,category,price,stock) 
   cr.execute(query)     
   conn.commit()     
   conn.close()     
    #return redirect('/customerlogin')
   return render(req,'vendorhome.html')
def viewproduct(req):
   L1=[]        
   L2=[]
   L3=[]
   L4=[]
   conn=mysql.connect(host="localhost",user="root",password="root123",database="outfitdb")      
   cr=conn.cursor()      
   cr.execute("select * from producttb")  
   while True:
      row=cr.fetchone()
      if row is None:
         break
      else:
         L1.append(row)
         row=cr.fetchone()
         L2.append(row)
         row=cr.fetchone()
         L3.append(row)
         row=cr.fetchone()
         L4.append(row)
         return render(req,"vendorviewproduct.html",{"L1":L1,"L2":L2,"L3":L3,"L4":L4})
def vieworder(req):
   L1=[]        
   L2=[]
   L3=[]
   L4=[]
   conn=mysql.connect(host="localhost",user="root",password="root123",database="outfitdb")      
   cr=conn.cursor()      
   cr.execute("select * from ordertb")  
   while True:
      row=cr.fetchone()
      if row is None:
         break
      else:
         L1.append(row)
         row=cr.fetchone()
         L2.append(row)
         row=cr.fetchone()
         L3.append(row)
         row=cr.fetchone()
         L4.append(row)
         return render(req,"vendororder.html",{"L1":L1,"L2":L2,"L3":L3,"L4":L4})
def viewstock(req):
   L1=[]        
   L2=[]
   L3=[]
   L4=[]
   conn=mysql.connect(host="localhost",user="root",password="root123",database="outfitdb")      
   cr=conn.cursor()      
   cr.execute("select * from producttb")  
   while True:
      row=cr.fetchone()
      if row is None:
         break
      else:
         L1.append(row)
         row=cr.fetchone()
         L2.append(row)
         row=cr.fetchone()
         L3.append(row)
         row=cr.fetchone()
         L4.append(row)
         return render(req,"vendorstock.html",{"L1":L1,"L2":L2,"L3":L3,"L4":L4})