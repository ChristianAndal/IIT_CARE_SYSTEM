from django.contrib import admin
from .models import DashboardWidget, Notification


@admin.register(DashboardWidget)
class DashboardWidgetAdmin(admin.ModelAdmin):
    list_display = ['user', 'widget_type', 'title', 'position', 'is_visible', 'created_at']
    list_filter = ['widget_type', 'is_visible', 'created_at']
    search_fields = ['user__username', 'title']
    list_editable = ['position', 'is_visible']
    readonly_fields = ['created_at', 'updated_at']


@admin.register(Notification)
class NotificationAdmin(admin.ModelAdmin):
    list_display = ['user', 'notification_type', 'title', 'is_read', 'created_at']
    list_filter = ['notification_type', 'is_read', 'created_at']
    search_fields = ['user__username', 'title', 'message']
    readonly_fields = ['created_at', 'read_at']
    date_hierarchy = 'created_at'
    actions = ['mark_as_read']
    
    def mark_as_read(self, request, queryset):
        for notification in queryset:
            notification.mark_as_read()
        self.message_user(request, f'{queryset.count()} notifications marked as read.')
    mark_as_read.short_description = 'Mark selected notifications as read'
