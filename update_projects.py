
import re

with open("src/components/Projects.jsx", "r", encoding="utf-8") as f:
    content = f.read()

# Card 1 Update
content = re.sub(
    r"description: \"An autonomous, cloud-native AI security agent built with LangGraph, FastAPI, and AWS ECS that correlates live NIST NVD vulnerability intelligence.\"",
    "description: \"Eliminates security alert fatigue by automatically investigating live vulnerabilities and generating ready-to-assign remediation tickets.\"",
    content
)
content = re.sub(
    r"metrics: {\s*kpis: \[\s*{ value: \"-80%\", label: \"Token Payload\" },\s*{ value: \"100%\", label: \"Policy Faithfulness\" },\s*{ value: \"<200ms\", label: \"Cached Latency\" }\s*\],\s*bullets: \[\s*{ lead: \"Two-Stage Reranking:\", text: \"PGVector \(k=10\) → FlashRank \(top_n=2\) cuts context bloat by 80% while passing LangSmith CI gates\.\" },\s*{ lead: \"Zero-Trust State:\", text: \"AsyncPostgresSaver \(max_size=20\) persists HITL pauses across ECS restarts \(~4\.2s cold p95\)\.\" }\s*\]\s*}",
    """metrics: {
      bullets: [
        { lead: "The Business Problem:", text: "Security teams waste hours manually cross-referencing thousands of daily vulnerability alerts (CVEs) against internal company compliance policies." },
        { lead: "What It Automates:", text: "Pulls live threat intelligence from NIST, matches vulnerabilities against internal security rules, and drafts prioritized remediation tickets in seconds (Python, LangGraph, FastAPI)." },
        { lead: "Enterprise Reliability:", text: "Includes Human-in-the-Loop approval gates and persistent database state (PostgreSQL, AWS ECS) so engineers can review and approve critical actions before changes go live." }
      ]
    }""",
    content
)

# Card 2 Update
content = re.sub(
    r"description: \"A production-grade, security-first CI/CD pipeline demonstrating enterprise best practices for operationalizing machine learning models.\"",
    "description: \"Automates the safe delivery of machine learning models from code commit to production while blocking security risks and broken deployments.\"",
    content
)
content = re.sub(
    r"metrics: {\s*kpis: \[\s*{ value: \"100%\", label: \"Crit CVEs Blocked\" },\s*{ value: \"<90s\", label: \"CI Security Gate\" },\s*{ value: \"Auto\", label: \"Drift Rollback\" }\s*\],\s*bullets: \[\s*{ lead: \"DevSecOps Gate:\", text: \"Automated Trivy container & dependency scanning blocks 100% of High/Critical CVEs pre-deploy\.\" },\s*{ lead: \"Registry & Rollback:\", text: \"MLflow Registry stage gates trigger automated rollback on F1/AUC drops across K8s manifests\.\" }\s*\]\s*}",
    """metrics: {
      bullets: [
        { lead: "The Business Problem:", text: "Deploying ML models manually is slow and risky—often introducing vulnerable dependencies or allowing degraded models to fail silently in production." },
        { lead: "What It Automates:", text: "An end-to-end CI/CD workflow (GitHub Actions, Docker, MLflow) that automatically tests code quality, tracks model versions, and packages releases on every push." },
        { lead: "Enterprise Reliability:", text: "Enforces automated container security scans (Trivy) to block vulnerable builds pre-deployment and triggers automatic rollbacks if live model accuracy drops." }
      ]
    }""",
    content
)

# Card 3 Update
content = re.sub(
    r"description: \"A resilient data extraction pipeline that dynamically maps messy, unstructured documents into strict schemas and autonomously corrects validation errors.\"",
    "description: \"Transforms messy, unstructured documents into clean database records—automatically fixing formatting errors that crash traditional data pipelines.\"",
    content
)
content = re.sub(
    r"metrics: {\s*kpis: \[\s*{ value: \"94%\", label: \"Auto-Healed\" },\s*{ value: \"≤2\", label: \"Retry Loops\" },\s*{ value: \"6%\", label: \"DLQ Routed\" }\s*\],\s*bullets: \[\s*{ lead: \"Autonomous Recovery:\", text: \"Intercepts schema drift, malformed JSON/Pydantic errors, and HTTP 429 backoffs automatically\.\" },\s*{ lead: \"Fault Isolation:\", text: \"Routes unrecoverable payloads to a Dead-Letter Queue \(DLQ\) with structured failure traces\.\" }\s*\]\s*}",
    """metrics: {
      bullets: [
        { lead: "The Business Problem:", text: "Traditional data pipelines break whenever a vendor changes a document layout or data format, forcing engineers to stop feature work and fix broken imports manually." },
        { lead: "What It Automates:", text: "An intelligent extraction workflow (Python, LangGraph, React) that reads unstructured files, maps data into strict schemas, and autonomously corrects validation errors on the fly." },
        { lead: "Enterprise Reliability:", text: "Prevents pipeline downtime by isolating unreadable files into a safe review queue (PostgreSQL) with clear audit logs, ensuring zero silent data loss." }
      ]
    }""",
    content
)

# Fix UI Rendering
# 1. Update the header title
content = content.replace(
    "<Activity className=\"w-4 h-4\" /> SYSTEM METRICS & TRADE-OFFS",
    "<Activity className=\"w-4 h-4\" /> PROJECT HIGHLIGHTS"
)
# 2. Remove the KPI grid
kpi_grid_pattern = r"<div className=\"grid grid-cols-3 gap-2 glass-divider pb-3 mb-4 text-center\">.*?</div>\s*<ul"
content = re.sub(kpi_grid_pattern, "<ul", content, flags=re.DOTALL)

with open("src/components/Projects.jsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Updated Projects.jsx successfully.")
