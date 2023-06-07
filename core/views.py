from django.shortcuts import render #redirect
from rest_framework.views import APIView
from rest_framework import permissions
from django.contrib.auth.models import User
from rest_framework.response import Response
from core.models import UserProfile
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.utils.decorators import method_decorator
# from django.contrib.auth import login
# from django.contrib.auth.forms import UserCreationForm

@method_decorator(csrf_protect, name='dispatch')
class SignUpView(APIView):
    permission_classes = (permissions.AllowAny, )
    def post(self, request, format=None):
        data = self.request.data
        username = data['username']
        password = data['password']
        re_password  = data['re_password']

        try:
            if password == re_password:
                if User.objects.filter(username=username).exists():
                    return Response({ 'error': 'Username already exists' })
                else:
                    if len(password) < 6:
                        return Response({ 'error': 'Password must be at least 6 characters' })
                    else:
                        user = User.objects.create_user(username=username, password=password)
    
                        user = User.objects.get(id=user.id)

                        user_profile = UserProfile.objects.create(user=user)

                        return Response({ 'success': 'User created successfully' })
            else:
                return Response({ 'error': 'Passwords do not match' })
        except:
                return Response({ 'error': 'Something went wrong when registering account' })
        
@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFToken(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        return Response({ 'success': 'CSRF cookie set' })

def front(request):
    context = { }
    return render(request, "index.html", context)

# def signup(request):
#    error_message = ''
#    if request.method == 'POST':
#       form = UserCreationForm(request.POST)
#       if form.is_valid():
#          user = form.save()
#          login(request, user)
#          return redirect('index')
#       else:
#          error_message = 'Invalid Signup -- Try Again'
#    form = UserCreationForm()
#    return render(request, 'registration/signup.html', {
#       'form': form,
#       'error': error_message
#    })