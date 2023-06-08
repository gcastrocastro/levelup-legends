from django.urls import path
from .views import GetCSRFToken, SignUpView, LoginView, LogoutView, CheckAuthenticatedView, DeleteAccountView, GetUserView

urlpatterns = [
    path('authenticated', CheckAuthenticatedView.as_view()),
    path('register', SignUpView.as_view()),
    path('login', LoginView.as_view()),
    path('logout', LogoutView.as_view()),
    path('delete', DeleteAccountView.as_view()),
    path('csrf_cookie', GetCSRFToken.as_view()),
    path('user', GetUserView.as_view())
]