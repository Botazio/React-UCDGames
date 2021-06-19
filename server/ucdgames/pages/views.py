from django.shortcuts import render


# landing page
def index(request):
    return render(request, 'pages/index.html')
