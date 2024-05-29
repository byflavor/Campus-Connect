from django.shortcuts import render

from rest_framework import viewsets
from .models import Event
from .serializers import EventSerializer
from rest_framework.response import Response

from rest_framework import status

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        else:
            # Log or return the error messages
            print(serializer.errors)  # Log to console
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Event

@api_view(['DELETE'])
def delete_all_events(request):
    if request.method == 'DELETE':
        Event.objects.all().delete()
        return Response({'message': 'All events deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
