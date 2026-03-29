from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Category
# Create your views here.

def product_list(request):
    products = Product.objects.all()
    data = []
    
    for p in products:
        data.append(
            {
                'id': p.id,
                'name': p.name,
                'description': p.description,
                'count': p.count,
                'is_active': p.is_active,
                'category_id': p.category_id,
            }
        )
    return JsonResponse(data, safe=False)
    

def product_detail(request, id):
    try:
        p = Product.objects.get(pk=id)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'product not found'}, status=404)
    data = {
        'id': p.id,
        'name': p.name,
        'description': p.description,
        'count': p.count,
        'is_active': p.is_active,
        'category_id': p.category_id,
    }
    return JsonResponse(data)


def category_list(request):
    categories = Category.objects.all()
    data = []
    for c in categories:
        data.append
        ({
            'id':   c.id,
            'name': c.name,
        })
    return JsonResponse(data, safe=False)


def category_detail(request, id):
    try:
        c = Category.objects.get(pk=id)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'category not found'}, status=404)
    return JsonResponse({'id': c.id, 'name': c.name})


def category_products(request, id):
    try:
        c = Category.objects.get(pk=id)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'category not found'}, status=404)
    products = Product.objects.filter(category=c)
    data = []
    for p in products:
        data.append({
            'id':          p.id,
            'name':        p.name,
            'price':       p.price,
            'description': p.description,
            'count':       p.count,
            'is_active':   p.is_active,
            'category_id': p.category_id,
        })
    return JsonResponse(data, safe=False)
