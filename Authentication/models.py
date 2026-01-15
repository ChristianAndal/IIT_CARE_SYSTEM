from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class UserProfile(models.Model):
    """
    Extended user profile for healthcare system users
    """
    USER_TYPES = [
        ('patient', 'Patient'),
        ('doctor', 'Doctor'),
        ('nurse', 'Nurse'),
        ('admin', 'Administrator'),
        ('pharmacist', 'Pharmacist'),
        ('lab_technician', 'Lab Technician'),
    ]
    
    id = models.AutoField(primary_key=True, db_column='Id')
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile', db_column='UserId')
    user_type = models.CharField(max_length=20, choices=USER_TYPES, default='patient', db_column='UserType')
    phone_number = models.CharField(max_length=20, blank=True, null=True, db_column='PhoneNumber')
    date_of_birth = models.DateField(blank=True, null=True, db_column='DateOfBirth')
    address = models.TextField(blank=True, null=True, db_column='Address')
    emergency_contact_name = models.CharField(max_length=100, blank=True, null=True, db_column='EmergencyContactName')
    emergency_contact_phone = models.CharField(max_length=20, blank=True, null=True, db_column='EmergencyContactPhone')
    medical_id_qr = models.CharField(max_length=255, unique=True, blank=True, null=True, db_column='MedicalIdQr')
    created_at = models.DateTimeField(auto_now_add=True, db_column='CreatedAt')
    updated_at = models.DateTimeField(auto_now=True, db_column='UpdatedAt')
    
    class Meta:
        db_table = 'authentication_userprofile'
        verbose_name = 'User Profile'
        verbose_name_plural = 'User Profiles'
    
    def __str__(self):
        return f"{self.user.get_full_name() or self.user.username} - {self.get_user_type_display()}"


class ActivityLog(models.Model):
    """
    Track user activities for audit purposes
    """
    id = models.AutoField(primary_key=True, db_column='Id')
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='activity_logs', db_column='UserId')
    action = models.CharField(max_length=100, db_column='Action')
    description = models.TextField(db_column='Description')
    ip_address = models.GenericIPAddressField(blank=True, null=True, db_column='IpAddress')
    user_agent = models.TextField(blank=True, null=True, db_column='UserAgent')
    created_at = models.DateTimeField(auto_now_add=True, db_column='CreatedAt')
    
    class Meta:
        db_table = 'authentication_activitylog'
        verbose_name = 'Activity Log'
        verbose_name_plural = 'Activity Logs'
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.user.username if self.user else 'Anonymous'} - {self.action} - {self.created_at}"
