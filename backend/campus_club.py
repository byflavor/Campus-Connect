class Clubs:
    def __init__(self, time_run, application_deadline, people, description):
        self.time_run = time_run
        self.application_deadline = application_deadline
        self.people = people
        self.description = description

    def __str__(self):
        return (f"Club Description: {self.description}\n"
                f"Time Run: {self.time_run}\n"
                f"Application Deadline: {self.application_deadline}\n"
                f"People in Club: {', '.join(self.people)}")

if __name__ == "__main__":
    print("Enter the following details for the club:")
    time_run = input("Time the club is run: ")
    application_deadline = input("Application deadline for the club: ")
    people = input("People in the club (separate names with a comma): ").split(',')
    description = input("Description of the club: ")

    club = Clubs(time_run, application_deadline, [person.strip() for person in people], description)
    print("\nClub Details:\n")
    print(club)