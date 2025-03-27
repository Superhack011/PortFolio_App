from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, User, Skill, Project

app = Flask(__name__)
app.config.from_object('config.Config')
db.init_app(app)
CORS(app)

# Get user profile
@app.route('/profile', methods=['GET'])
def get_profile():
    user = User.query.first()
    if user:
        return jsonify({
            "name": user.name,
            "email": user.email,
            "phone": user.phone,
            "bio": user.bio
        })
    return jsonify({"message": "No profile found"}), 404

# Update profile
@app.route('/profile', methods=['PUT'])
def update_profile():
    data = request.json
    user = User.query.first()
    if not user:
        user = User(name=data['name'], email=data['email'], phone=data['phone'], bio=data['bio'])
        db.session.add(user)
    else:
        user.name = data['name']
        user.email = data['email']
        user.phone = data['phone']
        user.bio = data['bio']
    db.session.commit()
    return jsonify({"message": "Profile updated successfully"})

# Get skills
@app.route('/skills', methods=['GET'])
def get_skills():
    skills = Skill.query.all()
    return jsonify([{"id": skill.id, "name": skill.name} for skill in skills])

# Add skill
@app.route('/skills', methods=['POST'])
def add_skill():
    data = request.json
    new_skill = Skill(name=data['name'])
    db.session.add(new_skill)
    db.session.commit()
    return jsonify({"message": "Skill added successfully"})

# Get projects
@app.route('/projects', methods=['GET'])
def get_projects():
    projects = Project.query.all()
    return jsonify([{
        "id": project.id,
        "title": project.title,
        "description": project.description,
        "github_link": project.github_link
    } for project in projects])

# Add project
@app.route('/projects', methods=['POST'])
def add_project():
    data = request.json
    new_project = Project(title=data['title'], description=data['description'], github_link=data.get('github_link', ''))
    db.session.add(new_project)
    db.session.commit()
    return jsonify({"message": "Project added successfully"})

if __name__ == '__main__':
    app.run(debug=True)
