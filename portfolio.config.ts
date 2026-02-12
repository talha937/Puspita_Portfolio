// Portfolio Data Configuration - Update this file to modify your portfolio content
export const portfolioData = {
  // Personal Information
  personal: {
    name: "Puspita Nandi",
    title: "Senior Backend Developer | ML Engineer | Cybersecurity Specialist",
    tagline: "Building scalable systems that power the next generation of financial technology",
    email: "puspita@example.com",
    location: "Narayanganj, Bangladesh",
    phoneCode: "+880",
    phone: "123-456-7890",
    bio: "Senior engineer with 8+ years of experience architecting high-performance distributed systems for FAANG and financial institutions. Specialized in building low-latency trading platforms, ML pipelines, and secure infrastructure at scale. Led teams that processed $10B+ in daily transactions with 99.99% uptime.",
    profileImage: "/profile.jpg", // Place your image in public folder
  },

  // Social Media & Professional Links
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    leetcode: "https://leetcode.com/yourusername",
    twitter: "https://twitter.com/yourusername",
    medium: "https://medium.com/@yourusername",
    devto: "https://dev.to/yourusername",
    portfolio: "https://yourportfolio.com",
  },

  // Hero Section
  hero: {
    headline: "Engineering Excellence at Scale",
    subheadline: "Transforming complex problems into elegant solutions for FAANG & fintech",
    cta: {
      primary: {
        text: "View My Work",
        link: "#projects"
      },
      secondary: {
        text: "Download Resume",
        link: "/resume.pdf" // Place your resume in public folder
      }
    },
    stats: [
      { value: "2+", label: "Years Experience" },
      { value: "2+", label: "Projects Delivered" },
      { value: "99.99%", label: "Uptime SLA" },
      { value: "$10B+", label: "Daily Transactions" }
    ]
  },

  // Experience
  experience: [
    {
      id: 1,
      company: "Meta (Facebook)",
      position: "Senior Backend Engineer",
      location: "Menlo Park, CA",
      startDate: "2022",
      endDate: "Present",
      logo: "/logos/meta.png", // Add company logos to public/logos/
      description: "Leading backend infrastructure for ML-powered recommendation systems serving 3B+ users.",
      achievements: [
        "Architected distributed caching layer reducing API latency by 60%",
        "Led migration to microservices handling 500K+ RPS",
        "Implemented ML pipeline processing 10TB daily data",
        "Mentored team of 5 engineers on system design best practices"
      ],
      technologies: ["Python", "Go", "Kubernetes", "PyTorch", "Redis", "Kafka"]
    },
    {
      id: 2,
      company: "Goldman Sachs",
      position: "Backend Developer | Quantitative Technology",
      location: "New York, NY",
      startDate: "2020",
      endDate: "2022",
      logo: "/logos/gs.png",
      description: "Built low-latency trading systems for algorithmic execution platform.",
      achievements: [
        "Reduced trade execution latency to sub-millisecond",
        "Implemented real-time risk management system",
        "Built secure APIs for $5B+ daily trading volume",
        "Achieved SOC2 and PCI-DSS compliance for payment systems"
      ],
      technologies: ["Java", "C++", "Spring Boot", "MongoDB", "RabbitMQ", "Docker"]
    },
    {
      id: 3,
      company: "Amazon Web Services",
      position: "Software Development Engineer II",
      location: "Seattle, WA",
      startDate: "2018",
      endDate: "2020",
      logo: "/logos/aws.png",
      description: "Developed cloud infrastructure services for AWS compute platform.",
      achievements: [
        "Built autoscaling service handling 1M+ EC2 instances",
        "Designed fault-tolerant distributed system with 99.99% SLA",
        "Reduced infrastructure costs by $2M annually",
        "Published 2 patents on cloud resource optimization"
      ],
      technologies: ["Python", "TypeScript", "DynamoDB", "Lambda", "CDK", "ECS"]
    },
    {
      id: 4,
      company: "Microsoft",
      position: "Software Engineer",
      location: "Redmond, WA",
      startDate: "2016",
      endDate: "2018",
      logo: "/logos/microsoft.png",
      description: "Contributed to Azure security and identity management platform.",
      achievements: [
        "Implemented OAuth 2.0 authentication for Azure AD",
        "Built threat detection ML models with 95% accuracy",
        "Reduced security incident response time by 40%",
        "Led security audits achieving ISO 27001 certification"
      ],
      technologies: ["C#", ".NET Core", "Azure", "SQL Server", "Redis", "Terraform"]
    }
  ],

  // Education
  education: [
    {
      id: 1,
      institution: "Daffodil Institute of IT",
      degree: "Bachelor of Science in Computer Science and Engineering",
      field: "Computer Science (Specialization: AI/ML)",
      location: "Dhaka, Bangladesh",
      startDate: "2024",
      endDate: "2029",
      gpa: "3.20/4.0",
      achievements: [
        "Research on distributed deep learning published in NeurIPS 2015",
        "Teaching Assistant for CS229 (Machine Learning)",
        "Winner of Daffodil Hackathon 2015"
      ]
    }
  ],

  // Featured Projects
  projects: [
    {
      id: 1,
      title: "High-Frequency Trading Engine",
      description: "Ultra-low latency trading system processing 1M+ orders/second with sub-microsecond execution times. Built custom matching engine and risk management.",
      image: "/projects/hft.jpg",
      liveUrl: "https://demo-hft.example.com",
      githubUrl: "https://github.com/yourusername/hft-engine",
      technologies: ["C++", "Rust", "FPGA", "Zero-Copy", "RDMA"],
      highlights: [
        "Sub-microsecond latency",
        "99.999% uptime",
        "Custom network stack"
      ],
      category: "Backend"
    },
    {
      id: 2,
      title: "ML-Powered Fraud Detection",
      description: "Real-time fraud detection system using ensemble ML models. Processes 500K transactions/minute with 98% accuracy and < 50ms latency.",
      image: "/projects/fraud.jpg",
      liveUrl: "https://demo-fraud.example.com",
      githubUrl: "https://github.com/yourusername/fraud-detection",
      technologies: ["Python", "TensorFlow", "Kafka", "Redis", "FastAPI"],
      highlights: [
        "98% accuracy",
        "Real-time inference",
        "$50M fraud prevented"
      ],
      category: "Machine Learning"
    },
    {
      id: 3,
      title: "Distributed Cache System",
      description: "Redis-compatible distributed cache with custom sharding algorithm. Handles 10M+ QPS with automatic failover and data replication.",
      image: "/projects/cache.jpg",
      liveUrl: "https://demo-cache.example.com",
      githubUrl: "https://github.com/yourusername/distributed-cache",
      technologies: ["Go", "etcd", "gRPC", "Consistent Hashing"],
      highlights: [
        "10M+ QPS",
        "Auto-sharding",
        "Zero downtime deployment"
      ],
      category: "Backend"
    },
    {
      id: 4,
      title: "Secure API Gateway",
      description: "Enterprise-grade API gateway with rate limiting, auth, and DDoS protection. SOC2 and PCI-DSS compliant with end-to-end encryption.",
      image: "/projects/gateway.jpg",
      liveUrl: "https://demo-gateway.example.com",
      githubUrl: "https://github.com/yourusername/api-gateway",
      technologies: ["Node.js", "Kong", "Vault", "JWT", "mTLS"],
      highlights: [
        "Zero security breaches",
        "Rate limiting",
        "Multi-tenancy support"
      ],
      category: "Cybersecurity"
    },
    {
      id: 5,
      title: "Kubernetes Auto-Scaler",
      description: "Intelligent pod autoscaler using predictive ML models. Reduces cloud costs by 45% while maintaining performance SLAs.",
      image: "/projects/k8s.jpg",
      liveUrl: "https://demo-k8s.example.com",
      githubUrl: "https://github.com/yourusername/k8s-autoscaler",
      technologies: ["Python", "Kubernetes", "Prometheus", "LSTM"],
      highlights: [
        "45% cost reduction",
        "Predictive scaling",
        "Custom CRD"
      ],
      category: "DevOps"
    },
    {
      id: 6,
      title: "Real-Time Analytics Platform",
      description: "Stream processing platform for real-time analytics. Processes 1TB/hour with complex event processing and time-series analysis.",
      image: "/projects/analytics.jpg",
      liveUrl: "https://demo-analytics.example.com",
      githubUrl: "https://github.com/yourusername/analytics-platform",
      technologies: ["Scala", "Spark", "Flink", "Cassandra", "Grafana"],
      highlights: [
        "1TB/hour throughput",
        "Complex CEP",
        "Sub-second queries"
      ],
      category: "Big Data"
    }
  ],

  // Skills (organized by category)
  skills: {
    languages: [
      { name: "Python", icon: "🐍", proficiency: 95 },
      { name: "Go", icon: "🔷", proficiency: 90 },
      { name: "Java", icon: "☕", proficiency: 90 },
      { name: "C++", icon: "⚡", proficiency: 85 },
      { name: "TypeScript", icon: "📘", proficiency: 90 },
      { name: "Rust", icon: "🦀", proficiency: 80 },
      { name: "Scala", icon: "🔴", proficiency: 75 },
      { name: "SQL", icon: "🗄️", proficiency: 95 }
    ],
    backend: [
      { name: "Django", icon: "🎸", proficiency: 95 },
      { name: "FastAPI", icon: "⚡", proficiency: 95 },
      { name: "Spring Boot", icon: "🍃", proficiency: 90 },
      { name: "Node.js", icon: "🟢", proficiency: 90 },
      { name: "gRPC", icon: "📡", proficiency: 85 },
      { name: "GraphQL", icon: "📊", proficiency: 85 },
      { name: "Microservices", icon: "🔧", proficiency: 95 },
      { name: "REST APIs", icon: "🌐", proficiency: 95 }
    ],
    databases: [
      { name: "PostgreSQL", icon: "🐘", proficiency: 95 },
      { name: "MongoDB", icon: "🍃", proficiency: 90 },
      { name: "Redis", icon: "🔴", proficiency: 95 },
      { name: "Cassandra", icon: "💫", proficiency: 85 },
      { name: "DynamoDB", icon: "⚡", proficiency: 90 },
      { name: "Elasticsearch", icon: "🔍", proficiency: 85 },
      { name: "TimescaleDB", icon: "⏰", proficiency: 80 },
      { name: "Neo4j", icon: "🕸️", proficiency: 75 }
    ],
    ml: [
      { name: "TensorFlow", icon: "🧠", proficiency: 90 },
      { name: "PyTorch", icon: "🔥", proficiency: 90 },
      { name: "Scikit-learn", icon: "📊", proficiency: 95 },
      { name: "Keras", icon: "🎯", proficiency: 85 },
      { name: "MLflow", icon: "📈", proficiency: 85 },
      { name: "Kubeflow", icon: "☸️", proficiency: 80 },
      { name: "XGBoost", icon: "🚀", proficiency: 90 },
      { name: "Apache Spark", icon: "⚡", proficiency: 85 }
    ],
    cloud: [
      { name: "AWS", icon: "☁️", proficiency: 95 },
      { name: "Azure", icon: "🔷", proficiency: 85 },
      { name: "GCP", icon: "🌥️", proficiency: 85 },
      { name: "Kubernetes", icon: "☸️", proficiency: 95 },
      { name: "Docker", icon: "🐳", proficiency: 95 },
      { name: "Terraform", icon: "🏗️", proficiency: 90 },
      { name: "Serverless", icon: "λ", proficiency: 85 },
      { name: "CloudFormation", icon: "📚", proficiency: 85 }
    ],
    security: [
      { name: "OAuth/JWT", icon: "🔐", proficiency: 95 },
      { name: "Encryption", icon: "🔒", proficiency: 90 },
      { name: "Penetration Testing", icon: "🎯", proficiency: 85 },
      { name: "OWASP", icon: "🛡️", proficiency: 90 },
      { name: "Zero Trust", icon: "🚫", proficiency: 85 },
      { name: "SIEM", icon: "👁️", proficiency: 80 },
      { name: "HashiCorp Vault", icon: "🔑", proficiency: 85 },
      { name: "Security Audits", icon: "📋", proficiency: 90 }
    ],
    messaging: [
      { name: "Kafka", icon: "📮", proficiency: 95 },
      { name: "RabbitMQ", icon: "🐰", proficiency: 90 },
      { name: "Redis Pub/Sub", icon: "📡", proficiency: 90 },
      { name: "AWS SQS/SNS", icon: "📬", proficiency: 90 },
      { name: "NATS", icon: "✉️", proficiency: 80 },
      { name: "Pulsar", icon: "🌟", proficiency: 75 }
    ],
    tools: [
      { name: "Git", icon: "🔀", proficiency: 95 },
      { name: "Linux", icon: "🐧", proficiency: 95 },
      { name: "CI/CD", icon: "🔄", proficiency: 90 },
      { name: "Grafana", icon: "📊", proficiency: 90 },
      { name: "Prometheus", icon: "📈", proficiency: 90 },
      { name: "Jaeger", icon: "🔍", proficiency: 85 },
      { name: "DataDog", icon: "🐕", proficiency: 85 },
      { name: "Splunk", icon: "📊", proficiency: 80 }
    ]
  },

  // Certifications
  certifications: [
    {
      id: 1,
      name: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SAP-12345",
      logo: "/certs/aws-sap.png"
    },
    {
      id: 2,
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2023",
      credentialId: "CKA-67890",
      logo: "/certs/cka.png"
    },
    {
      id: 3,
      name: "Google Professional Machine Learning Engineer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-ML-54321",
      logo: "/certs/gcp-ml.png"
    },
    {
      id: 4,
      name: "Certified Information Systems Security Professional (CISSP)",
      issuer: "ISC²",
      date: "2022",
      credentialId: "CISSP-98765",
      logo: "/certs/cissp.png"
    },
    {
      id: 5,
      name: "HashiCorp Certified: Terraform Associate",
      issuer: "HashiCorp",
      date: "2023",
      credentialId: "HC-TF-11111",
      logo: "/certs/terraform.png"
    }
  ],

  // Achievements & Awards
  achievements: [
    {
      id: 1,
      title: "Patent: Distributed System Optimization",
      description: "US Patent for novel approach to resource optimization in distributed systems",
      date: "2023",
      type: "Patent",
      organization: "USPTO"
    },
    {
      id: 2,
      title: "Best Paper Award - NeurIPS",
      description: "Research on efficient deep learning in distributed environments",
      date: "2022",
      type: "Research",
      organization: "NeurIPS Conference"
    },
    {
      id: 3,
      title: "Top 1% LeetCode Global Ranking",
      description: "Solved 1000+ algorithmic problems, Contest rating: 2400+",
      date: "2023",
      type: "Achievement",
      organization: "LeetCode"
    },
    {
      id: 4,
      title: "Engineering Excellence Award",
      description: "Recognized for outstanding technical leadership and innovation",
      date: "2022",
      type: "Award",
      organization: "Meta"
    },
    {
      id: 5,
      title: "Open Source Contributor",
      description: "Core contributor to Kubernetes, 500+ merged PRs",
      date: "2021-Present",
      type: "Open Source",
      organization: "CNCF"
    }
  ],

  // Contact preferences
  contact: {
    preferredMethod: "email",
    availability: "Open to FAANG & HFT opportunities",
    timezone: "PST (UTC-8)",
    responseTime: "Within 24 hours"
  }
};

export default portfolioData;
