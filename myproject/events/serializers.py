from rest_framework import serializers
from .models import Event

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'
    
    def to_representation(self, instance):
        """ Convert comma-separated categories to list for API output """
        ret = super().to_representation(instance)
        ret['eventCategories'] = ret['eventCategories'].split(',') if ret['eventCategories'] else []
        return ret

    def to_internal_value(self, data):
        """ Convert list of categories to comma-separated string for storage """
        data['eventCategories'] = ','.join(data['eventCategories'])
        return super().to_internal_value(data)
