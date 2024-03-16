## my-course-roster-sumsuzzoha
Livesite Link: https://course-roster-sumsuzzoha-70b314.netlify.app/



##  Questions

- Add at least 3 Project features 

- Discuss how you managed the state in your assignment project.


## First Question answer
- 1. Display a comprehensive list of available courses with details such as course name, description, costing, credit hours etc.
- 2. Enable students to Purshase for courses they are interested in.

- 3. Students would know the limmition  to Purshase courses and why.

## Second Question answer

- By using this State {const [courses, setCourses] = useState([]);} and Fetch , Handle & Load the data from API. Then the API/JSON data implement in cards section and Cart section.
- Using If statement to handle avoide select same course more than 1.
Also limiting select courses more than 20 credit hour.
- handleSelectCourse function used for handle to select the courses.
- handleRemoveCartCourse function used for Remove specific course from cart. and show remaining courses, course credit, etc.
