from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    portfolio_data = {
        "name": "Akib Jalal",
        "title": "Student & Aspiring Software Developer",
        "bio": "Passionate Computer Science & Engineering student with a strong drive for problem-solving, software development, and building efficient web applications.",
        "email": "akibjalal16@gmail.com",
        "phone": "01568248871",
        "education": {
            "degree": "B.Sc. in ICE",
            "institution": "Bangladesh University of Professionals (BUP)",
            "session": "2023-24"
        },
        "skills": {
            "languages": ["Python", "Java", "C++", "HTML5", "CSS3", "JavaScript"],
            "tools": ["PyCharm", "Code::Blocks", "NetBeans", "Git"],
            "soft_skills": ["Problem Solving", "Team Collaboration", "Logical Thinking", "Adaptability"]
        },
        "projects": [
            {
                "title": "Restaurant Management System",
                "description": "A comprehensive system designed to manage restaurant operations, including order tracking, menu customization, and billing.",
                "tech": "Python, HTML, CSS, JavaScript"
            },
            {
                "title": "Hospital Management System",
                "description": "A desktop application built to streamline patient registration, doctor scheduling, and medical record management.",
                "tech": "Java, MySQL, Swing"
            }
        ]
    }
    return render_template('index.html', data=portfolio_data)

if __name__ == '__main__':
    app.run(debug=True)
