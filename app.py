from flask import Flask, render_template, jsonify, request
import json
import os

app = Flask(__name__)

PROJECTS_FILE = 'projects.json'

TECH_DOMAINS = {
    'AI': ['TensorFlow', 'PyTorch', 'Keras', 'OpenAI', 'LangChain', 'Hugging Face', 'BERT', 'GPT', 'Neural Networks', 'Deep Learning'],
    'ML': ['Python', 'Scikit-learn', 'XGBoost', 'Random Forest', 'SVM', 'KNN', 'Logistic Regression', 'Decision Trees', 'Ensemble Methods'],
    'DE': ['Apache Spark', 'Kafka', 'Airflow', 'ETL', 'Data Pipeline', 'Apache Beam', 'Snowflake', 'BigQuery', 'Data Warehouse'],
    'Mlops': ['MLflow', 'Kubeflow', 'DVC', 'Model Deployment', 'CI/CD', 'GitOps', 'Model Monitoring', 'Experiment Tracking', 'Kubernetes'],
    'Dev': ['Flask', 'Django', 'FastAPI', 'Node.js', 'Express', 'Ruby on Rails', 'Spring Boot', 'Java', 'C#', 'Go','React', 'Vue.js', 'Angular', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'SASS', 'Bootstrap', 'Tailwind CSS']
}

DOMAIN_COLORS = {
    'AI': '#ff6b6b',        # Red
    'ML': '#4ecdc4',        # Teal
    'DS': '#45b7d1',        # Blue
    'DE': '#96ceb4',        # Green
    'Cloud': '#feca57',     # Yellow
    'Backend': '#ff9ff3',   # Pink
    'Frontend': '#54a0ff',  # Light Blue
    'Database': '#5f27cd',  # Purple
    'DevOps': '#00d2d3'     # Cyan
}

def get_projects():
    """Load projects from JSON file"""
    if not os.path.exists(PROJECTS_FILE):
        print(f"Projects file not found: {PROJECTS_FILE}")
        create_sample_projects_file()
    
    try:
        with open(PROJECTS_FILE, 'r', encoding='utf-8') as file:
            projects = json.load(file)
        
        for project in projects:
            if 'title' in project and 'name' not in project:
                project['name'] = project['title']
            if 'duration' in project and 'date' not in project:
                project['date'] = project['duration']
            
            project['domains'] = get_project_domains(project.get('technologies', []))
            
            project['language'] = project['technologies'][0] if project.get('technologies') else 'Unknown'
            
            project.setdefault('link', None)
            project.setdefault('github_link', project.get('link')) 
            project.setdefault('live_demo', None)
            project.setdefault('description', [])
            project.setdefault('description_items', project.get('description', []))
        
        projects = sort_projects_by_date(projects)
        
        print(f"Loaded {len(projects)} projects from {PROJECTS_FILE}")
        return projects
        
    except Exception as e:
        print(f"Error loading projects: {e}")
        return []

def sort_projects_by_date(projects):
    """Sort projects by date, newest first"""
    def extract_end_date(project):
        duration = project.get('duration', project.get('date', ''))
        if not duration:
            return '1900-01' 
        
        if '--' in duration:
            end_date = duration.split('--')[1].strip()
        else:
            end_date = duration.strip()
        
        if end_date.lower() == 'present':
            return '9999-12'
        
        month_mapping = {
            'jan': '01', 'feb': '02', 'mar': '03', 'apr': '04',
            'may': '05', 'jun': '06', 'jul': '07', 'aug': '08',
            'sep': '09', 'oct': '10', 'nov': '11', 'dec': '12'
        }
        
        try:
            parts = end_date.split()
            if len(parts) >= 2:
                month_name = parts[0].lower()[:3]
                year = parts[1]
                month_num = month_mapping.get(month_name, '12')
                return f"{year}-{month_num}"
            else:
                return f"{end_date}-12"
        except:
            return '1900-01'
    
    return sorted(projects, key=extract_end_date, reverse=True)

def get_project_domains(technologies):
    """Determine which domains a project belongs to based on its technologies"""
    domains = set()
    
    for tech in technologies:
        for domain, domain_techs in TECH_DOMAINS.items():
            if any(tech.lower() in dt.lower() or dt.lower() in tech.lower() for dt in domain_techs):
                domains.add(domain)
    
    return list(domains)

def create_sample_projects_file():
    """Create a sample projects.json file"""
    sample_projects = [
        {
            "title": "Credit Risk Explainer with Real-Time Fairness & Interpretability",
            "technologies": ["Python", "SHAP", "LIME", "XGBoost", "Streamlit", "Machine Learning"],
            "duration": "May 2025 - Jun 2025",
            "link": "https://github.com/therrshan/credit-risk-explainer",
            "description": [
                "Built an interactive, explainable AI dashboard for real-time credit risk prediction using XGBoost, Random Forest, and Logistic Regression, with full model evaluation and comparison.",
                "Implemented local interpretability with SHAP and LIME to provide per-user prediction insights, promoting transparency and trust in AI-driven decision systems.",
                "Designed fairness monitoring modules with disparate impact and equal opportunity metrics, supporting responsible AI and bias detection across user segments.",
                "Deployed a Streamlit dashboard on Streamlit Cloud with real-time user input processing, automated model retraining, and CI/CD deployment via GitHub Actions for continuous delivery."
            ]
        },
        {
            "title": "E-Commerce Analytics Platform",
            "technologies": ["Flask", "PostgreSQL", "React", "Docker", "AWS", "Data Analysis"],
            "duration": "Jan 2025 - Apr 2025",
            "link": "https://github.com/username/ecommerce-analytics",
            "description": [
                "Developed a comprehensive analytics platform for e-commerce businesses using Flask backend with PostgreSQL database and React frontend.",
                "Implemented real-time sales tracking, customer behavior analysis, and inventory management with RESTful APIs and WebSocket connections.",
                "Built interactive dashboards with Chart.js and D3.js for data visualization, supporting multiple chart types and custom filtering options.",
                "Containerized the application with Docker and deployed on AWS ECS with automated CI/CD pipeline using GitHub Actions."
            ]
        },
        {
            "title": "Social Media Sentiment Analysis Tool",
            "technologies": ["Python", "NLTK", "Transformers", "FastAPI", "MongoDB", "NLP"],
            "duration": "Sep 2024 - Dec 2024",
            "link": "https://github.com/username/sentiment-analyzer",
            "description": [
                "Created a real-time sentiment analysis tool for social media posts using NLTK, spaCy, and Hugging Face Transformers with BERT-based models.",
                "Built a FastAPI backend with async processing capabilities, handling 1000+ requests per minute with Redis caching for improved performance.",
                "Developed data collection pipelines for Twitter and Reddit APIs with Celery for background task processing and MongoDB for data storage.",
                "Implemented real-time sentiment monitoring dashboard with WebSockets and deployed on Heroku with PostgreSQL for production use."
            ]
        }
    ]
    
    try:
        with open(PROJECTS_FILE, 'w', encoding='utf-8') as file:
            json.dump(sample_projects, file, indent=2)
        print(f"Created sample projects file: {PROJECTS_FILE}")
    except Exception as e:
        print(f"Error creating sample file: {e}")

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/ml-scratch')
def ml_scratch():
    return render_template('ml_scratch.html')

if __name__ == '__main__':
    app.run(debug=True)

# For Vercel deployment
app.debug = False