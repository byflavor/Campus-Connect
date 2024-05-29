class UserRegistry:
    def __init__(self):
        self.users = {}

    def add_user(self, username, email, **other_details):
        if username in self.users:
            raise ValueError("User already exists")
        self.users[username] = {'email': email, **other_details}

    def remove_user(self, username):
        if username in self.users:
            del self.users[username]
        else:
            raise ValueError("User not found")

    def get_user_info(self, username):
        if username in self.users:
            return self.users[username]
        else:
            raise ValueError("User not found")

    def all_users(self):
        return list(self.users.keys())
    
if __name__ == '__main__':
    registry = UserRegistry()

    registry.add_user("john_doe", "john@example.com", age=30, location="New York")
    registry.add_user("jane_doe", "jane@example.com", age=25, location="California")
    print("All registered users:", registry.all_users())
    print("Information for john_doe:", registry.get_user_info("john_doe"))
    registry.remove_user("john_doe")
    print("All registered users after removal:", registry.all_users())