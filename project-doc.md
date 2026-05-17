# Qleva PRD v2.0

## Product Name: Qleva
**Pronounced:** “Cleva” (clever)

### Brand Handles
- **X/Twitter:** @qleva_ai
- **Domain:** qleva.cloud

### Founder
Vic, Full-stack Web3 AI Automation Engineer

### Status
Pre-MVP, Base testnet-first build

---

## Updated Vision
Qleva is a natural-language crypto automation operating system.
Users talk to Qleva like a human assistant:
- “Buy $20 of ETH every Friday.”
- “Bridge 200 USDC to Base tomorrow morning.”
- “Swap half my PEPE profits into BTC when price drops 10%.”
- “Send USDC to my friend every month.”

Qleva interprets intent, simulates execution, explains the transaction clearly, requests approval when needed, and executes actions through smart wallets on Base.

**The goal is not “AI trading magic.”**
The goal is trustworthy, human-readable crypto automation.

Qleva combines:
- AI orchestration
- Smart wallets
- On-chain execution
- Automation workflows
- Human-readable transaction planning
- Safety-first execution

It becomes the easiest way for normal users to interact with crypto through conversation.

---

## 1. Executive Summary
Crypto today is still too technical for normal users.
People must:
- manually bridge
- manually swap
- remember recurring actions
- manage multiple wallets
- understand gas fees
- navigate confusing interfaces
- learn DeFi terminology

Qleva abstracts all of that.
Instead of clicking through complex dashboards, users simply tell Qleva what they want.
Examples:
- “Buy ETH every Friday.”
- “Bridge funds to Base tomorrow.”
- “Take profit if my token pumps 30%.”
- “Stake idle USDC automatically.”
- “Swap into stablecoins every Sunday.”
- “Send 10usdt to [ADDRESS] every sunday”

Qleva converts natural language into deterministic blockchain actions.
The AI layer understands intent.
The execution layer guarantees predictable actions.
This distinction is critical.

Qleva is not trying to create a fully autonomous black-box AI trader.
Qleva focuses on safe, understandable, user-approved automations.

**Core positioning:**
“The easiest way to automate crypto actions using natural language.”

---

## 2. Problem Statement
### Current Problems in Crypto UX

**Problem 1: DeFi is complicated**
Users struggle with:
- bridges
- swaps
- staking
- recurring buys
- managing multiple chains
- transaction timing
Even experienced users make mistakes.

**Problem 2: Automation tools are fragmented**
Current tools require:
- scripts
- bots
- APIs
- Zapier-like logic
- technical setup
Normal users cannot use them.

**Problem 3: Existing AI agents are unreliable**
Many AI crypto products:
- overpromise
- hallucinate
- fail execution
- lack transparency
- confuse users
Users do not trust black-box agents with money.

**Problem 4: Smart wallets are still underutilized**
Base and Coinbase Smart Wallets make gasless UX possible, but most apps still feel technical.
The infrastructure exists.
The consumer UX layer is missing.

---

## 3. Product Vision
Qleva becomes the conversational operating system for crypto actions.
Users no longer interact with:
- complex DeFi dashboards
- bridge interfaces
- DEX screens
- scheduling systems

Instead, users interact with one interface:
**Conversation.**

**Long-term vision:**
Every crypto user has an AI automation assistant that:
- understands intent
- executes safely
- automates repetitive actions
- explains every transaction clearly
- remembers user preferences
- coordinates multi-step workflows

---

## 4. Core Philosophy
**AI decides intent**
**System decides execution**

This is the core architecture philosophy.
The AI layer:
- interprets user goals
- extracts intent
- structures workflows

The execution engine:
- validates transactions
- simulates actions
- applies policies
- executes deterministic workflows

This creates:
- reliability
- transparency
- user trust
- predictable behavior

Qleva is not “YOLO autonomous AI.”
Qleva is safe conversational automation.

---

## 5. Core Use Cases

### Category A: One-Time Actions

**Use Case 1: Swap Tokens**
- **User:** “Swap 50 USDC to ETH.”
- **Qleva:** detects chain, estimates gas, finds best route, shows preview, requests approval, executes transaction.

**Use Case 2: Bridge Assets**
- **User:** “Bridge 200 USDC from Ethereum to Base tomorrow morning.”
- **Qleva:** schedules workflow, monitors timing, executes bridge, confirms completion.

**Use Case 3: Send Payments**
- **User:** “Send 30 USDC to Sarah every month.”
- **Qleva:** stores recipient, creates recurring payment automation, requests recurring approval, executes automatically.

**Use Case 4: Portfolio Rebalancing**
- **User:** “Move 20% of my portfolio into stablecoins.”
- **Qleva:** analyzes balances, generates transaction plan, requests confirmation, executes swaps.

### Category B: Recurring Automations

**Use Case 5: Dollar Cost Averaging (DCA)**
- **User:** “Buy $25 of ETH every Friday.”
- **Qleva:** creates recurring schedule, stores workflow, automatically executes, logs history.

**Use Case 6: Profit Taking**
- **User:** “Sell 30% of my ETH if price goes up 20%.”
- **Qleva:** monitors conditions, triggers execution, sends notification, logs trade.

**Use Case 7: Yield Automation**
- **User:** “Stake idle USDC automatically.”
- **Qleva:** monitors wallet balance, detects idle assets, suggests vaults, executes with approval.

**Use Case 8: Weekly Stablecoin Conversion**
- **User:** “Convert my meme coin profits into USDC every Sunday.”
- **Qleva:** tracks token performance, executes scheduled swaps, updates history.

### Category C: Advanced Multi-Step Workflows

**Use Case 9: Cross-Chain Workflow**
- **User:** “Bridge to Base, buy ETH, then stake it.”
- **Qleva:** breaks workflow into steps, estimates costs, simulates full execution, executes sequentially.

**Use Case 10: Smart Portfolio Actions**
- **User:** “If BTC drops 10%, buy $100 worth automatically.”
- **Qleva:** monitors price feeds, waits for trigger, executes purchase.

**Use Case 11: Smart Treasury Management**
- **User:** “Keep 20% of my wallet in stablecoins at all times.”
- **Qleva:** monitors allocations, rebalances periodically.

---

## 6. Target Users

**Primary Users: Consumer Crypto Users**
People who:
- use Coinbase/Base
- want automation
- dislike complex DeFi interfaces
- want simple recurring actions

**Beginner DeFi Users**
People who:
- fear making mistakes
- want AI guidance
- need human-readable execution

**Power Users**
Users who:
- manage multiple wallets
- perform repetitive tasks
- want faster workflows

---

## 7. Competitive Landscape

**Existing Competitors**
- **Coinfellow:** Positioning: General-purpose AI crypto agent. Weaknesses observed: inconsistent execution, unclear automation support, AI limitations, trust gap between demos and reality.
- **Virtuals Protocol:** Focus: Protocol/infrastructure-heavy AI agent economy. Weaknesses: crypto-native complexity, less consumer-focused UX, abstract positioning.
- **Traditional Automation Tools (scripts, bots, cron jobs, APIs):** Weaknesses: technical setup, poor UX, inaccessible to normal users.

---

## 8. Qleva Moat

**1. Human-Readable Automation**
Users see exactly: what will happen, when it will happen, how much will be spent, which wallet is used, which chain is used.
*Example:*
- **Action:** Swap USDC → ETH
- **Amount:** $50
- **Schedule:** Every Friday at 10:00 AM UTC
- **Wallet:** 0x1234...
- **Approval:** Approved once for recurring execution
This creates trust.

**2. AI + Deterministic Execution**
AI handles understanding. Execution engine handles reliability. This prevents hallucinated transactions, random execution behavior, and unpredictable actions.

**3. Conversational UX**
The entire platform is built around conversation, simplicity, and smart wallet abstraction. Users never touch complicated DeFi dashboards.

**4. Safety-First Automation**
Features: spending limits, approval gates, simulation previews, emergency stop, automation pause, transaction history. Trust becomes a major differentiator.

**5. Memory & Personalization**
Over time Qleva learns preferred assets, risk tolerance, favorite chains, automation habits, and transaction patterns. This creates retention.

---

## 9. Core Features

**Feature 1: Conversational Command Interface**
Users interact through chat.
- Capabilities: intent detection, workflow parsing, context understanding, follow-up clarification.

**Feature 2: Smart Wallet Integration**
Powered by Coinbase Smart Wallet.
- Capabilities: passkey login, gasless UX, wallet abstraction, policy-based execution.

**Feature 3: Automation Engine**
Handles recurring tasks, scheduled workflows, conditional triggers, delayed execution.

**Feature 4: Transaction Simulation**
Before execution Qleva shows estimated output, gas fees, slippage, execution route, risks.

**Feature 5: Execution History**
Users can review completed actions, inspect failed actions, export transaction history, replay workflows.

**Feature 6: Automation Dashboard**
Users manage active automations, paused workflows, execution frequency, conditions, spending limits.

**Feature 7: Notification System**
Notifications for completed actions, failed transactions, trigger activation, approval requests. Channels: email, push, Telegram later.

**Feature 8: AI Memory Layer**
Qleva remembers wallet behavior, previous automations, user preferences, recurring intents.

---

## 10. Technical Architecture

**Frontend**
- **Stack:** Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion
- **Responsibilities:** chat interface, dashboard, automation management, transaction previews

**Backend**
- **Stack:** Node.js, Express or Fastify, LangGraph, Supabase, PostgreSQL
- **Responsibilities:** orchestration, workflow storage, AI memory, automation scheduling, notifications

**AI Layer**
- **Stack:** OpenAI, LangGraph, tool calling, structured outputs
- **Responsibilities:** intent extraction, action planning, workflow parsing, follow-up questioning

**Automation Engine**
- **Stack:** Trigger.dev, Temporal later, cron jobs initially
- **Responsibilities:** recurring execution, delayed actions, workflow scheduling, retries

**Blockchain Layer**
- **Stack:** Base, Coinbase Smart Wallet, Coinbase CDP SDK, viem, wagmi
- **Responsibilities:** transaction execution, wallet integration, gas abstraction, smart account management

---

## 11. Where Solidity Comes In
Solidity is used only for trust-critical infrastructure. Not everything belongs on-chain.

**Contract 1: Automation Registry**
- **Purpose:** Store automation ownership and metadata.
- **Responsibilities:** automation ownership, execution permissions, workflow hashes, automation status.

**Contract 2: Policy & Permission Manager**
- **Purpose:** Control execution boundaries.
- **Responsibilities:** spending limits, token permissions, allowed protocols, approval policies.

**Contract 3: Treasury / Fee Contract**
- **Purpose:** Handle protocol fees.
- **Responsibilities:** collect platform fees, split revenue, manage protocol treasury.

**Contract 4: Automation Verification Layer**
- **Purpose:** Anchor automation states on-chain.
- **Examples:** workflow hash verification, execution proofs, automation signatures.

---

## 12. Database Design

**Core Tables**
- **Users:** id, wallet, preferences, settings
- **Automations:** id, user_id, workflow_json, status, schedule, chain
- **Executions:** id, automation_id, tx_hash, status, logs
- **Notifications:** id, user_id, message, status

---

## 13. Security Model

**Safety Mechanisms**
- **Spending Limits:** Users define daily limits, transaction limits, token restrictions.
- **Human Approval Gates:** Large transactions require confirmation, biometric/passkey approval.
- **Simulation Engine:** Every workflow is simulated before execution.
- **Emergency Stop:** Users can instantly pause automations, revoke permissions, disable wallets.

---

## 14. Monetization Strategy

**Revenue Streams**
1. **Automation Fees:** Small fee per execution.
2. **Premium Subscription:** Advanced automations.
3. **Power User Features:** analytics, advanced triggers, multi-wallet support.
4. **Enterprise APIs Later:** Automation APIs for teams.

---

## 15. MVP Scope

**What Ships First**
- **MUST HAVE:** conversational UI, smart wallet login, recurring swaps, scheduled execution, automation dashboard, execution history, transaction previews.
- **NOT MVP:** token, DAO, social feed, creator marketplace, copy trading, advanced AI autonomy, multi-chain support.

---

## 16. Product Roadmap

**Phase 0: Foundation (Week 1)**
- **Goals:** setup architecture, build UI foundation, setup Base integration
- **Deliverables:** Next.js app, smart wallet auth, chat interface, database schema

**Phase 1: Conversational Actions (Weeks 2–3)**
- **Goals:** Enable one-time crypto actions.
- **Deliverables:** swap execution, bridge execution, transaction previews, intent parsing, execution confirmations.

**Phase 2: Automation Engine (Weeks 4–5)**
- **Goals:** Enable recurring workflows.
- **Deliverables:** recurring buys, scheduled transactions, cron execution, automation dashboard, execution logs.

**Phase 3: Smart Conditions (Weeks 6–8)**
- **Goals:** Enable trigger-based workflows.
- **Deliverables:** price triggers, take-profit actions, portfolio conditions, monitoring system.

**Phase 4: Solidity Infrastructure (Weeks 8–10)**
- **Goals:** Move trust-critical systems on-chain.
- **Deliverables:** automation registry, permission manager, fee contracts, workflow verification.

**Phase 5: Public Launch (Month 3)**
- **Goals:** Acquire first users.
- **Deliverables:** public beta, onboarding flow, launch content, Base community outreach.

---

## 17. Go-To-Market Strategy

**Primary Channels**
- **X/Twitter:** Build in public: demos, workflows, automation examples, execution videos.
- **Farcaster:** Target Base-native users.
- **Base Ecosystem:** Leverage Base builder communities, Coinbase developer ecosystem.

---

## 18. Example Demo Flows

**Demo Flow 1**
- **User:** “Buy $20 of ETH every Friday.”
- **Qleva:** parses command, shows workflow preview, requests approval, schedules automation.

**Demo Flow 2**
- **User:** “Bridge 100 USDC to Base tomorrow morning.”
- **Qleva:** detects chain, estimates bridge fees, schedules execution, confirms completion.

**Demo Flow 3**
- **User:** “If ETH drops 10%, buy more automatically.”
- **Qleva:** creates monitoring trigger, tracks price feeds, executes when triggered.

---

## 19. Long-Term Vision
Qleva evolves into:
- conversational crypto operating system
- autonomous financial assistant
- AI-powered treasury manager
- cross-chain automation layer

Eventually users may share automations, sell strategies, subscribe to workflows, clone automations.
But the first priority is simple: **Reliable conversational crypto automation.**

---

## 20. Final Positioning
Qleva is not trying to be:
- a speculative AI token
- a hype-driven autonomous trading bot
- a complicated protocol ecosystem

Qleva is:
**“The easiest and safest way to automate crypto actions using natural language.”**

That simplicity is the moat. Trust. Reliability. Human-readable. Conversation-first UX. Those are the differentiators that matter.
