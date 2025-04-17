# NammaLakes: Distributed Lake Monitoring, the Smarter Way

 **NammaLakes**, an IoT-powered distributed system designed to monitor the health and status of urban lakes. As urbanization grows, many freshwater bodies suffer from pollution, mismanagement, and neglect. NammaLakes takes a step toward smarter, data-driven lake conservation and management.

## See It in Action

Explore the live system here: [Website](https://nammalakes.github.io)  

---

## What’s This Project All About?

At its core, this system leverages a network of IoT devices and intelligent software to monitor lake parameters in real-time — from water quality to sensor-driven alerts. This allows stakeholders and authorities to take timely action, backed by accurate data and reliable insights.

The project aims to:
- Enable real-time, distributed monitoring of lakes using IoT sensors.
- Provide an intuitive interface for citizens and officials to explore lake health.
- Support environmental data collection and analysis at scale.
- Promote transparency and awareness in urban water body management.

---

## Major Components — It’s Not Just One Thing

This project is made up of multiple coordinated parts, each contributing a key function:

### 1. **Frontend: ReactJS**
A sleek, responsive dashboard and landing page built with **ReactJS**, enabling users to:
- View live lake data
- Analyze trends and alerts
- Interact with visual reports

### 2. **Documentation Site: Docusaurus**
Documentation is no afterthought — we use **Docusaurus** to maintain clean, structured guides for developers and contributors.

### 3. **Backend Services: FastAPI**
The brain of the operation. Fast, reliable, and lightweight — **FastAPI** handles incoming data, user interactions, and all system logic.

### 4. **Databases: SQLite and PostgreSQL**
We use **SQLite** for development and testing, and **PostgreSQL** in production, offering a robust and scalable way to manage sensor and user data.

### 5. **Deployment: AWS**
The entire system runs in the cloud via **AWS**, ensuring it’s always available, scalable, and secure.

### 6. **Containerization: Docker**
With **Docker**, deploying or replicating the system becomes effortless. Every service is packaged, isolated, and version-controlled.

### 7. **Package Management: Poetry**
Managing Python dependencies is clean and modern, thanks to **Poetry**. It keeps our backend environment consistent and reproducible.

### 8. **Message Queueing: RabbitMQ**
**RabbitMQ** ensures smooth, decoupled communication between distributed sensor nodes and the backend — no data packet left behind.

### 9. **Logging: Loguru**
From error tracking to audit trails, **Loguru** helps us maintain precise logs for system activity and sensor alerts.

### 10. **MQTT Protocol: Mosquitto**
Real-time data from the lake sensors is sent through the **Mosquitto** MQTT broker, keeping the system lightweight and fast.

---

## Intelligence Under the Hood

This isn’t just a data dashboard. The system also uses **trained machine learning models**, such as the **Isolation Forest**, to detect anomalies in lake behavior — spotting irregular patterns in temperature, turbidity, or sensor activity.

A built-in **chatbot** offers users quick answers to frequently asked questions and helps guide them through interacting with the system.

---
## The Bigger Picture: Why We’re Doing This

At a time when sustainability matters more than ever, NammaLakes aims to bridge the gap between smart city tech and environmental conservation. By creating a scalable, open system for lake monitoring, we hope to empower local communities, researchers, and administrators to keep our lakes healthy and thriving.

This is more than a tech stack — it’s a collective step toward ecological responsibility, one data point at a time.

---
## Ready to Explore?

Whether you’re a developer, environmentalist, or curious citizen, we welcome contributions, feedback, and ideas. Dive into the code, check out the docs, or spin up your own deployment. There’s a lot to build — and a lot more to protect.

---

## Installation

To get started locally:

```bash
git clone https://github.com/your-org/namma-lakes.git
cd namma-lakes
```

Install Python packages:

```bash
cd backend
poetry install
```

Spin up containers (RabbitMQ, DB, API):

```bash
docker-compose up --build
```

For the dashboard:

```bash
cd dashboard
npm install
npm run dev
```

And for documentation:

```bash
cd docs
npm install
npm run start
```

> Make sure you have Docker, Poetry, and Node.js installed.

---

## Folder Structure

The project is organized into the following core folders:

- `backend/` – FastAPI services, data processing, ML models  
- `docs/` – Docusaurus documentation site  
- `dashboard/` – ReactJS landing page and monitoring dashboard  
- `node/` – Simulated IoT nodes and MQTT integrations  

---

## Contributing

We welcome contributions from developers, researchers, and curious minds alike.

To contribute:

1. Fork this repository.
2. Create a new branch:
   ```bash
   git checkout -b your-feature-branch
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your fork and open a Pull Request:
   ```bash
   git push origin your-feature-branch
   ```

We review PRs regularly and are happy to collaborate.

---

## Contact

For questions, collaboration, or demo access, reach out at:  
`contact@namma-lakes.org`  
Or open an issue on this repository.
