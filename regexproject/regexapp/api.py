from rest_framework import viewsets, permissions
from .serializers import QuerySerializer
from .models import Query
# Lead ViewSet
class Queryviewset(viewsets.ModelViewSet):
    queryset = Query.objects.all()
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = QuerySerializer
    # def get_queryset(self):
    #     return self.request.user.queries.all()
    # def perform_create(self, serializer):
    #     serializer.save(owner=self.request.user)