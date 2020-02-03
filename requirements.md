# Refero

### Purpose
To provide a simple and intuitive way for people to organize their lives.

### Description
Refero is an Angular/Spring web application that allows users to create and organize lists. A user can create an account, as well as create, view, edit, and delete their own lists. A user can create groups and invite other users to join that group. Users can accept or reject invitations to groups. Group members can make and delete lists as well as edit all lists in a group. A user can also change their password or email on an accounts page. An admin can moderate users and lists, by banning users and deleting lists. Admins may also un-ban users at their discretion.

### Requirements
1. Refero functionality should reflect the below user stories.
2. Data is stored using H2.
3. Back end is hosted on an EC2 instance.
4. Front end is hosted on an S3 bucket.
5. Data access is performed through Hibernate.
6. Server side communication using Spring MVC.
7. Client side communication using Angular HttpClient.
8. Version control implemented using git.
9. Logging preformed using Srping AOP.
10. JUnit unit tests of back end functionality.
11. Front end testing using Jasmine.

### Modules
- Login Module | Paul
- Admin Module | Garret
- Group Module | Justin
- List Module | Zach

### User Stories
##### User
- As a user I can register for an account to save lists.
    + 3 points
- As a user I can create new lists.
    + 2 points
- As a user I can name lists
    + 1 point
- As a user I can add items to a list.
    + 2 points
- As a user I can save created lists.
    + 2 points
- As a user I can view lists I have saved.
   + 1 point
- As a user I can mark list items as completed.
    + 2 points
- As a user I can delete saved lists.
    + 1 point
- As a user I can create groups to organize lists.
    + 1 points
- As a user I can edit lists in groups I am apart of.
    + 2 points
- As a user I can invite other users to my group
    + 2 points
- As a user I can accept or reject group invitations.
    + 1 point
##### Admin
- As an admin I can view all users.
    + 1 point
- As an admin I can delete user lists.
   + 2 point
- As an admin I can view all lists.
    + 1 point
- As an admin I can ban users.
    + 2 points
- As an admin I can unban users.
   + 2 points
- As an admin I can view a list of banned users.
    + 1 point
