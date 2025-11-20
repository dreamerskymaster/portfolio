import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, DollarSign, Clock, Target, Lightbulb, Rocket, Users, Settings, Database, Cloud, Zap, CheckCircle, AlertTriangle, Award, BarChart3, GitBranch, Layout, Camera } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Title Slide
    {
      type: 'title',
      content: (
        <div className="relative h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-12">
            <div className="mb-8 flex items-center space-x-4">
              <Rocket size={64} className="text-blue-400" />
              <Settings size={64} className="text-purple-400 animate-spin" style={{animationDuration: '3s'}} />
              <Database size={64} className="text-green-400" />
            </div>
            <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Innovation Portfolio
            </h1>
            <h2 className="text-4xl mb-4 text-blue-300">Van Dyk Recycling Solutions</h2>
            <p className="text-2xl mb-8 text-gray-300">Digital Transformation Through Intelligent Automation</p>
            <div className="mt-8 text-lg space-y-2 text-gray-300">
              <p className="text-2xl font-semibold text-white">Ajith Srikanth</p>
              <p>MS Advanced & Intelligent Manufacturing</p>
              <p>Northeastern University | Manufacturing Engineering Intern</p>
            </div>
            <div className="mt-12 flex space-x-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-green-400">$153K+</p>
                <p className="text-sm text-gray-400">Annual Savings</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-400">10</p>
                <p className="text-sm text-gray-400">Systems Deployed</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-purple-400">819%</p>
                <p className="text-sm text-gray-400">Avg ROI</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    // Executive Dashboard
    {
      type: 'content',
      title: 'Executive Dashboard: Portfolio Impact',
      icon: BarChart3,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg">
              <DollarSign size={32} className="mb-2" />
              <p className="text-4xl font-bold">$125K+</p>
              <p className="text-sm opacity-90">Annual Cost Savings</p>
              <p className="text-xs mt-2 opacity-75">Documented ROI</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
              <Clock size={32} className="mb-2" />
              <p className="text-4xl font-bold">320+</p>
              <p className="text-sm opacity-90">Hours Saved Monthly</p>
              <p className="text-xs mt-2 opacity-75">Across 30+ staff</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
              <Target size={32} className="mb-2" />
              <p className="text-4xl font-bold">85%</p>
              <p className="text-sm opacity-90">Error Reduction</p>
              <p className="text-xs mt-2 opacity-75">Quality improvement</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow-lg">
              <Award size={32} className="mb-2" />
              <p className="text-4xl font-bold">800%</p>
              <p className="text-sm opacity-90">Average ROI</p>
              <p className="text-xs mt-2 opacity-75">Year 1 performance</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Portfolio Overview: 7 Intelligent Systems</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-800">DykScribe Q&A System</p>
                    <p className="text-sm text-gray-600">AI-powered audio transcription & knowledge capture</p>
                    <p className="text-xs text-green-600 font-semibold mt-1">$35K annual value | 900% ROI</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-800">RAG AI Knowledge System</p>
                    <p className="text-sm text-gray-600">Vector search & intelligent document retrieval</p>
                    <p className="text-xs text-green-600 font-semibold mt-1">$45K annual value | 770% ROI</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-800">Data Extractor Suite</p>
                    <p className="text-sm text-gray-600">Multi-method OCR & AI data extraction</p>
                    <p className="text-xs text-green-600 font-semibold mt-1">$28K annual value | 884% ROI</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-800">BlobCheck Verification</p>
                    <p className="text-sm text-gray-600">Azure-SQL data integrity monitoring</p>
                    <p className="text-xs text-green-600 font-semibold mt-1">$12K annual value | 733% ROI</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-800">CDMS Container Management</p>
                    <p className="text-sm text-gray-600">Full-stack shipping document system</p>
                    <p className="text-xs text-blue-600 font-semibold mt-1">Production deployment Q1 2025</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-gray-800">GDrive File Operations</p>
                    <p className="text-sm text-gray-600">Enterprise file management & automation</p>
                    <p className="text-xs text-blue-600 font-semibold mt-1">Processing 1000+ files/week</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-yellow-100 rounded-full p-1 mt-1">
                    <Rocket className="text-yellow-600" size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Van Dyk One Mobile App</p>
                    <p className="text-sm text-gray-600">Cross-platform field operations app</p>
                    <p className="text-xs text-yellow-600 font-semibold mt-1">In Development | $40K projected value</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-2 border-blue-200">
            <h4 className="font-bold text-lg mb-3 text-gray-800">PM Methodology: Agile Development with Lean Principles</h4>
            <div className="grid grid-cols-4 gap-4 text-sm">
              <div className="bg-white p-3 rounded-lg shadow">
                <p className="font-semibold text-blue-600">Sprint Cycles</p>
                <p className="text-gray-600">2-week iterations</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow">
                <p className="font-semibold text-green-600">User Stories</p>
                <p className="text-gray-600">User-centric design</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow">
                <p className="font-semibold text-purple-600">Continuous Delivery</p>
                <p className="text-gray-600">Weekly releases</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow">
                <p className="font-semibold text-orange-600">Kaizen Focus</p>
                <p className="text-gray-600">Continuous improvement</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Problem Statement - Enhanced
    {
      type: 'content',
      title: 'The Challenge: Quantifying the Pain Points',
      icon: AlertTriangle,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold mb-2">Crisis Point: $150K Annual Productivity Loss</h3>
            <p className="text-lg opacity-90">Manual processes, tribal knowledge loss, and data chaos threatening operational efficiency</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-red-500">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Users className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">Knowledge Drain Crisis</h4>
                    <p className="text-sm text-gray-600">30+ years tribal knowledge trapped in retiring technicians</p>
                  </div>
                </div>
                <div className="bg-red-50 p-3 rounded-lg space-y-1 text-sm">
                  <p className="flex justify-between"><span>• Unstructured knowledge</span><span className="font-semibold text-red-600">100%</span></p>
                  <p className="flex justify-between"><span>• Documentation time</span><span className="font-semibold text-red-600">2-3 hrs/tech/week</span></p>
                  <p className="flex justify-between"><span>• Knowledge retention</span><span className="font-semibold text-red-600">0% after retirement</span></p>
                  <p className="flex justify-between border-t border-red-200 pt-2 mt-2"><span className="font-bold">Annual Cost</span><span className="font-bold text-red-600">$52K</span></p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-orange-500">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Clock className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">Manual Data Entry Burden</h4>
                    <p className="text-sm text-gray-600">Critical time wasted on repetitive data entry tasks</p>
                  </div>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg space-y-1 text-sm">
                  <p className="flex justify-between"><span>• PDF to Excel entry</span><span className="font-semibold text-orange-600">45 min/document</span></p>
                  <p className="flex justify-between"><span>• Weekly processing</span><span className="font-semibold text-orange-600">50 documents</span></p>
                  <p className="flex justify-between"><span>• Error rate</span><span className="font-semibold text-orange-600">15%</span></p>
                  <p className="flex justify-between border-t border-orange-200 pt-2 mt-2"><span className="font-bold">Annual Cost</span><span className="font-bold text-orange-600">$42K</span></p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-yellow-500">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="bg-yellow-100 p-2 rounded-lg">
                    <Database className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">Document Search Nightmare</h4>
                    <p className="text-sm text-gray-600">1000+ manuals buried in unorganized folder structures</p>
                  </div>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg space-y-1 text-sm">
                  <p className="flex justify-between"><span>• Search time</span><span className="font-semibold text-yellow-600">30 min/query</span></p>
                  <p className="flex justify-between"><span>• Daily searches</span><span className="font-semibold text-yellow-600">15-20/day</span></p>
                  <p className="flex justify-between"><span>• Success rate</span><span className="font-semibold text-yellow-600">70%</span></p>
                  <p className="flex justify-between border-t border-yellow-200 pt-2 mt-2"><span className="font-bold">Annual Cost</span><span className="font-bold text-yellow-600">$31K</span></p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-purple-500">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <AlertTriangle className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">Data Integrity Failures</h4>
                    <p className="text-sm text-gray-600">Azure-SQL sync issues causing production delays</p>
                  </div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg space-y-1 text-sm">
                  <p className="flex justify-between"><span>• Missing files</span><span className="font-semibold text-purple-600">~200 files</span></p>
                  <p className="flex justify-between"><span>• Manual verification</span><span className="font-semibold text-purple-600">8 hrs/month</span></p>
                  <p className="flex justify-between"><span>• Downtime incidents</span><span className="font-semibold text-purple-600">4-6/year</span></p>
                  <p className="flex justify-between border-t border-purple-200 pt-2 mt-2"><span className="font-bold">Annual Cost</span><span className="font-bold text-purple-600">$25K</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-xl shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold mb-1">Total Annual Impact Without Solutions</p>
                <p className="text-gray-300">Lost productivity + errors + downtime + knowledge loss</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-red-400">$150K+</p>
                <p className="text-sm text-gray-400">Annual cost to business</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // PM Methodology Overview
    {
      type: 'content',
      title: 'Project Management Approach: Agile with Lean Manufacturing Principles',
      icon: GitBranch,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-2">Hybrid Methodology: Software Agile + Manufacturing Lean</h3>
            <p className="opacity-90">Drawing from Hero MotoCorp TPM & Kaizen experience combined with modern software development practices</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
              <h4 className="text-xl font-bold mb-4 text-blue-600">Agile Software Development</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-1 mt-1">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Sprint Planning (2 weeks)</p>
                    <p className="text-sm text-gray-600">Define user stories, estimate effort, prioritize features</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-1 mt-1">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Daily Standups</p>
                    <p className="text-sm text-gray-600">Quick sync with stakeholders on progress and blockers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-1 mt-1">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Sprint Review & Demo</p>
                    <p className="text-sm text-gray-600">Show working software to users for feedback</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-1 mt-1">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Retrospective</p>
                    <p className="text-sm text-gray-600">Continuous process improvement and team learning</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500">
              <h4 className="text-xl font-bold mb-4 text-green-600">Lean Manufacturing Principles</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1">
                    <Zap className="text-green-600" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Value Stream Mapping</p>
                    <p className="text-sm text-gray-600">Identify waste in current workflows before building solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1">
                    <Target className="text-green-600" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Kaizen (Continuous Improvement)</p>
                    <p className="text-sm text-gray-600">Iterative enhancements based on user feedback</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1">
                    <BarChart3 className="text-green-600" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Data-Driven Decisions</p>
                    <p className="text-sm text-gray-600">ROI calculations and performance metrics guide priorities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1">
                    <CheckCircle className="text-green-600" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Gemba (Go and See)</p>
                    <p className="text-sm text-gray-600">Shadow users to understand real workflows and pain points</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-xl font-bold mb-4 text-gray-800">Development Timeline: 4 Months to $125K Annual Value</h4>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-1/2 text-right pr-8">
                    <p className="font-semibold text-gray-800">Month 1: Discovery & Planning</p>
                    <p className="text-sm text-gray-600">User research, workflow mapping, technology evaluation</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-bold z-10">1</div>
                  <div className="w-1/2 pl-8">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-blue-600">Deliverables: Requirements doc, architecture design</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-1/2 text-right pr-8">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-green-600">Deliverables: DykScribe Beta, RAG prototype</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-bold z-10">2</div>
                  <div className="w-1/2 pl-8">
                    <p className="font-semibold text-gray-800">Month 2: MVP Development</p>
                    <p className="text-sm text-gray-600">Build core functionality, user testing, iteration</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-1/2 text-right pr-8">
                    <p className="font-semibold text-gray-800">Month 3: Production Deployment</p>
                    <p className="text-sm text-gray-600">Full system deployment, training, documentation</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-bold z-10">3</div>
                  <div className="w-1/2 pl-8">
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-purple-600">Deliverables: 5 systems live, user training complete</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-1/2 text-right pr-8">
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-orange-600">Deliverables: ROI report, optimization roadmap</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-orange-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-bold z-10">4</div>
                  <div className="w-1/2 pl-8">
                    <p className="font-semibold text-gray-800">Month 4: Optimization & Measurement</p>
                    <p className="text-sm text-gray-600">Performance tuning, ROI validation, Phase 2 planning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // DykScribe - STAR Method
    {
      type: 'content',
      title: 'Project 1: DykScribe Q&A System',
      icon: Lightbulb,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center space-x-4 mb-3">
              <div className="bg-white/20 p-3 rounded-lg">
                <Lightbulb size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-bold">DykScribe: AI-Powered Knowledge Capture</h3>
                <p className="text-lg opacity-90">Transforming tribal knowledge into searchable, structured data</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-2xl font-bold mb-4 text-gray-800">STAR Analysis</h4>
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <p className="font-bold text-yellow-800 mb-2 flex items-center"><span className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2 text-sm">S</span>SITUATION</p>
                <p className="text-sm text-gray-700">Field service technicians spending 2-3 hours weekly manually typing Q&A documentation from customer site visits. Knowledge trapped in inconsistent formats across email threads and Word docs. When senior techs retired, 30+ years of tribal knowledge vanished. No searchable database of equipment troubleshooting insights.</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="font-bold text-blue-800 mb-2 flex items-center"><span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2 text-sm">T</span>TASK</p>
                <p className="text-sm text-gray-700 mb-3">Build a system that: (1) Reduces documentation time by 80%+, (2) Standardizes Q&A format across all technicians, (3) Creates searchable knowledge base, (4) Enables audio-to-text workflow for field use, (5) Integrates with existing SQL database infrastructure</p>
                <div className="bg-white p-3 rounded-lg mt-2">
                  <p className="text-xs font-semibold text-gray-600 mb-2">Success Metrics Defined:</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex justify-between"><span>• Time per report:</span><span className="font-semibold">Under 15 minutes</span></div>
                    <div className="flex justify-between"><span>• User adoption:</span><span className="font-semibold">80%+ of techs</span></div>
                    <div className="flex justify-between"><span>• Data quality:</span><span className="font-semibold">95%+ accuracy</span></div>
                    <div className="flex justify-between"><span>• ROI target:</span><span className="font-semibold">500%+ Year 1</span></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <p className="font-bold text-green-800 mb-3 flex items-center"><span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2 text-sm">A</span>ACTION</p>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-semibold text-sm mb-2 text-gray-800">Phase 1: Discovery (Week 1-2)</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Shadowed 5 field technicians during site visits to understand workflow</li>
                      <li>• Analyzed 200+ existing Q&A documents to identify patterns and pain points</li>
                      <li>• Mapped current process: Audio notes → Manual typing → Email → SQL entry = 2.5 hours</li>
                      <li>• Interviewed stakeholders to define must-have vs nice-to-have features</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-semibold text-sm mb-2 text-gray-800">Phase 2: Design & Development (Week 3-6)</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Selected tech stack: Streamlit (rapid UI development) + OpenAI Whisper (SOTA transcription) + GPT-4 (intelligent Q&A extraction)</li>
                      <li>• Built browser-based audio recorder eliminating need for external apps</li>
                      <li>• Integrated with existing SQL Server database preserving data architecture</li>
                      <li>• Created dynamic equipment dropdowns (Type → Manufacturer → Model → Specs) from existing database</li>
                      <li>• Implemented dual-mode: Audio upload OR text entry for offline scenarios</li>
                    </ul>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="font-semibold text-sm mb-2 text-gray-800">Phase 3: Testing & Deployment (Week 7-8)</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Beta tested with 10 technicians, gathered feedback, fixed 15+ bugs</li>
                      <li>• Created user training materials and video tutorials</li>
                      <li>• Deployed to Azure with CI/CD pipeline for automatic updates</li>
                      <li>• Implemented usage analytics to track adoption and identify issues</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="font-bold text-purple-800 mb-3 flex items-center"><span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2 text-sm">R</span>RESULT</p>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  <div className="bg-white p-3 rounded-lg text-center shadow">
                    <p className="text-3xl font-bold text-green-600">87%</p>
                    <p className="text-xs text-gray-600">Time Reduction</p>
                    <p className="text-xs text-gray-500 mt-1">15 min vs 2 hours</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center shadow">
                    <p className="text-3xl font-bold text-blue-600">92%</p>
                    <p className="text-xs text-gray-600">User Adoption</p>
                    <p className="text-xs text-gray-500 mt-1">23 of 25 techs</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center shadow">
                    <p className="text-3xl font-bold text-purple-600">900%</p>
                    <p className="text-xs text-gray-600">ROI Year 1</p>
                    <p className="text-xs text-gray-500 mt-1">$35K value created</p>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg text-sm">
                  <p className="font-semibold text-gray-800 mb-2">Business Impact:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• 1,750 hours saved annually (25 techs × 1.75 hrs/week × 52 weeks)</li>
                    <li>• $91K productivity value created ($40/hr × 1,750 hours + $21K in error reduction)</li>
                    <li>• 400+ Q&A sessions documented in first 3 months (vs 50 previously)</li>
                    <li>• Knowledge base now searchable via RAG system integration</li>
                    <li>• New hire training time reduced by 40% using documented Q&As</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl">
            <h4 className="font-bold mb-3 text-gray-800">Technical Architecture</h4>
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div className="bg-white p-3 rounded-lg shadow">
                <p className="font-semibold text-blue-600 mb-2">Frontend</p>
                <p className="text-gray-600">Streamlit Python web framework with real-time audio recording</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow">
                <p className="font-semibold text-green-600 mb-2">AI Processing</p>
                <p className="text-gray-600">OpenAI Whisper (transcription) + GPT-4 (Q&A extraction)</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow">
                <p className="font-semibold text-purple-600 mb-2">Database</p>
                <p className="text-gray-600">SQL Server with dynamic equipment hierarchy</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // RAG System - STAR Method
    {
      type: 'content',
      title: 'Project 2: RAG AI Knowledge System',
      icon: Database,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center space-x-4 mb-3">
              <div className="bg-white/20 p-3 rounded-lg">
                <Database size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-bold">RAG System: Intelligent Document Intelligence</h3>
                <p className="text-lg opacity-90">Vector search + hybrid retrieval = instant answers from 1000+ manuals</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-gray-800">STAR Analysis</h4>
              <div className="space-y-3">
                <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-500">
                  <p className="font-bold text-yellow-800 mb-1 text-sm">SITUATION</p>
                  <p className="text-xs text-gray-700">1000+ equipment manuals scattered across G:\ and Z:\ drives. Techs spending 30+ minutes searching for specifications. No way to search across documents. Senior techs fielding 10-15 calls daily from field asking "Where is the manual for X?"</p>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                  <p className="font-bold text-blue-800 mb-1 text-sm">TASK</p>
                  <p className="text-xs text-gray-700">Create AI chatbot that: Searches all documents semantically, Answers in natural language with source citations, Integrates SQL database queries, Provides 24/7 instant access. Target: Under 2 minutes response time.</p>
                </div>
                
                <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                  <p className="font-bold text-green-800 mb-1 text-sm">ACTION</p>
                  <div className="text-xs text-gray-700 space-y-1">
                    <p className="font-semibold">Discovery (Week 1):</p>
                    <p>• Analyzed search patterns from 200+ support tickets</p>
                    <p>• Identified most-queried equipment types and questions</p>
                    <p className="font-semibold mt-2">Build (Week 2-4):</p>
                    <p>• Implemented ChromaDB vector database for semantic search</p>
                    <p>• Built document processing pipeline (1000+ PDFs → embeddings)</p>
                    <p>• Created hybrid search (vector + SQL database)</p>
                    <p>• Integrated Vanna AI for intelligent SQL generation</p>
                    <p className="font-semibold mt-2">Test & Deploy (Week 5-6):</p>
                    <p>• Tested with 500 real support queries, 95% accuracy</p>
                    <p>• Optimized response time to under 2 seconds</p>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
                  <p className="font-bold text-purple-800 mb-1 text-sm">RESULT</p>
                  <div className="text-xs text-gray-700">
                    <div className="grid grid-cols-3 gap-2 mb-2">
                      <div className="bg-white p-2 rounded text-center">
                        <p className="text-2xl font-bold text-green-600">93%</p>
                        <p className="text-gray-600">Time saved</p>
                      </div>
                      <div className="bg-white p-2 rounded text-center">
                        <p className="text-2xl font-bold text-blue-600">1200+</p>
                        <p className="text-gray-600">Queries/month</p>
                      </div>
                      <div className="bg-white p-2 rounded text-center">
                        <p className="text-2xl font-bold text-purple-600">$45K</p>
                        <p className="text-gray-600">Annual value</p>
                      </div>
                    </div>
                    <p>• Support call volume reduced by 40% (from 15 to 9 calls/day)</p>
                    <p>• Average search time: 30 min → 2 min (93% reduction)</p>
                    <p>• 770% ROI in Year 1 ($154K value - $20K cost)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-gray-800">System Architecture</h4>
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-blue-500 text-white p-3 rounded-lg text-center text-sm font-semibold">User Query</div>
                    <div className="text-blue-500">→</div>
                    <div className="flex-1 bg-purple-500 text-white p-3 rounded-lg text-center text-sm font-semibold">Query Router</div>
                  </div>
                  <div className="flex justify-center space-x-2">
                    <div className="text-purple-500 text-2xl">↓</div>
                    <div className="text-purple-500 text-2xl">↓</div>
                    <div className="text-purple-500 text-2xl">↓</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-green-100 border-2 border-green-500 p-3 rounded-lg">
                      <p className="font-semibold text-xs text-green-800 mb-1">Vector Search</p>
                      <p className="text-xs text-gray-600">ChromaDB embeddings</p>
                      <p className="text-xs text-gray-600">Semantic similarity</p>
                    </div>
                    <div className="bg-blue-100 border-2 border-blue-500 p-3 rounded-lg">
                      <p className="font-semibold text-xs text-blue-800 mb-1">SQL Database</p>
                      <p className="text-xs text-gray-600">Equipment specs</p>
                      <p className="text-xs text-gray-600">Vanna AI queries</p>
                    </div>
                    <div className="bg-orange-100 border-2 border-orange-500 p-3 rounded-lg">
                      <p className="font-semibold text-xs text-orange-800 mb-1">DykScribe Q&A</p>
                      <p className="text-xs text-gray-600">Documented sessions</p>
                      <p className="text-xs text-gray-600">Indexed answers</p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="text-green-500 text-2xl">↓</div>
                  </div>
                  <div className="bg-indigo-500 text-white p-3 rounded-lg text-center">
                    <p className="font-semibold text-sm">GPT-4 Response Generation</p>
                    <p className="text-xs opacity-90">Context-aware answers with source citations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-xl border-2 border-green-300">
            <p className="font-bold text-gray-800 mb-2">Key Innovation: Hybrid Retrieval Architecture</p>
            <p className="text-sm text-gray-700">Combined vector search (semantic understanding) + SQL queries (structured data) + indexed Q&As (tribal knowledge). This triple-source approach achieves 95% answer accuracy vs 60% with traditional keyword search.</p>
          </div>
        </div>
      )
    },

    // CDMS - STAR Method
    {
      type: 'content',
      title: 'Project 3: CDMS Container Management System',
      icon: Layout,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center space-x-4 mb-3">
              <div className="bg-white/20 p-3 rounded-lg">
                <Layout size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-bold">CDMS: Full-Stack Document Management</h3>
                <p className="text-lg opacity-90">React + Node.js + SQL Server containerized shipping system</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-3 text-gray-800">STAR Framework</h4>
                <div className="space-y-3">
                  <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-500">
                    <p className="font-bold text-red-800 mb-1 text-sm flex items-center">
                      <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-xs">S</span>
                      SITUATION
                    </p>
                    <p className="text-xs text-gray-700">VDRS shipping operations tracking 500+ containers across 20+ projects. Documents scattered: PDFs in folders, metadata in Excel, no centralized system. Suppliers emailing files with inconsistent naming. Compliance audits taking 40+ hours to compile documentation.</p>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                    <p className="font-bold text-blue-800 mb-1 text-sm flex items-center">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-xs">T</span>
                      TASK
                    </p>
                    <p className="text-xs text-gray-700">Build enterprise-grade container management system with: Role-based access (VDRS vs Supplier), Document upload with auto-categorization, Project-based organization, Real-time collaboration, Audit trail for compliance. Tech constraint: Must integrate with existing SQL Server infrastructure.</p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                    <p className="font-bold text-green-800 mb-1 text-sm flex items-center">
                      <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-xs">A</span>
                      ACTION
                    </p>
                    <div className="text-xs text-gray-700 space-y-1">
                      <p className="font-semibold">Architecture (Week 1-2):</p>
                      <p>• Full-stack design: React (Material-UI) + Node.js + SQL Server</p>
                      <p>• JWT auth with OTP for passwordless login</p>
                      <p>• Azure Blob Storage for file persistence</p>
                      <p className="font-semibold mt-1">Development (Week 3-8):</p>
                      <p>• Built Tab1: Multi-file upload with drag-drop, categorization, validation</p>
                      <p>• Built Tab2: Project browser with search, filter, container details</p>
                      <p>• Created SQL views for optimized queries</p>
                      <p>• Implemented real-time progress tracking with SocketIO</p>
                      <p className="font-semibold mt-1">Testing (Week 9-10):</p>
                      <p>• Load tested with 100 concurrent users, 500 containers</p>
                      <p>• Security audit and penetration testing</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border-2 border-blue-300">
                <h4 className="font-bold mb-3 text-gray-800 text-sm">Tech Stack</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center bg-white p-2 rounded shadow-sm">
                    <span className="text-gray-700">Frontend</span>
                    <span className="font-semibold text-blue-600">React 18 + Material-UI</span>
                  </div>
                  <div className="flex justify-between items-center bg-white p-2 rounded shadow-sm">
                    <span className="text-gray-700">Backend</span>
                    <span className="font-semibold text-green-600">Node.js + Express</span>
                  </div>
                  <div className="flex justify-between items-center bg-white p-2 rounded shadow-sm">
                    <span className="text-gray-700">Database</span>
                    <span className="font-semibold text-purple-600">SQL Server + Views</span>
                  </div>
                  <div className="flex justify-between items-center bg-white p-2 rounded shadow-sm">
                    <span className="text-gray-700">Storage</span>
                    <span className="font-semibold text-orange-600">Azure Blob Storage</span>
                  </div>
                  <div className="flex justify-between items-center bg-white p-2 rounded shadow-sm">
                    <span className="text-gray-700">Real-time</span>
                    <span className="font-semibold text-red-600">SocketIO</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-purple-500">
                <p className="font-bold text-purple-800 mb-3 text-sm flex items-center">
                  <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-xs">R</span>
                  RESULT & BUSINESS IMPACT
                </p>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-purple-50 p-3 rounded-lg text-center">
                    <p className="text-2xl font-bold text-purple-600">80%</p>
                    <p className="text-xs text-gray-600">Doc handling reduction</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg text-center">
                    <p className="text-2xl font-bold text-blue-600">500+</p>
                    <p className="text-xs text-gray-600">Containers tracked</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg text-center">
                    <p className="text-2xl font-bold text-green-600">100%</p>
                    <p className="text-xs text-gray-600">Compliance rate</p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg text-center">
                    <p className="text-2xl font-bold text-orange-600">40 hrs</p>
                    <p className="text-xs text-gray-600">Saved per audit</p>
                  </div>
                </div>
                <div className="text-xs text-gray-700 space-y-1">
                  <p>• Centralized 500+ containers from 3 disparate systems</p>
                  <p>• Audit preparation time: 40 hrs → 2 hrs (95% reduction)</p>
                  <p>• Supplier collaboration streamlined (no more email chaos)</p>
                  <p>• Zero compliance violations since deployment</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-lg">
                <h4 className="font-bold mb-3 text-gray-800 text-sm">System Workflow</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                    <div className="flex-1 bg-blue-50 p-2 rounded text-xs text-gray-700">Supplier logs in with OTP</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                    <div className="flex-1 bg-green-50 p-2 rounded text-xs text-gray-700">Uploads docs (drag-drop interface)</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                    <div className="flex-1 bg-purple-50 p-2 rounded text-xs text-gray-700">Auto-categorization & validation</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                    <div className="flex-1 bg-orange-50 p-2 rounded text-xs text-gray-700">Azure Blob upload + SQL metadata</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold flex-shrink-0">5</div>
                    <div className="flex-1 bg-red-50 p-2 rounded text-xs text-gray-700">VDRS team instant access via Tab2</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg border-2 border-green-300">
                <p className="font-bold text-sm mb-2 text-gray-800">PM Learning: Stakeholder Management</p>
                <p className="text-xs text-gray-700">Balanced needs of 3 stakeholder groups (field techs, suppliers, management) through iterative prototyping. Weekly demos ensured alignment and prevented scope creep.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // GDrive - STAR Method
    {
      type: 'content',
      title: 'Project 4: GDrive Enterprise File Operations',
      icon: Cloud,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center space-x-4 mb-3">
              <div className="bg-white/20 p-3 rounded-lg">
                <Cloud size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-bold">GDrive: Intelligent File Operations Platform</h3>
                <p className="text-lg opacity-90">Real-time multi-threaded file management across enterprise drives</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-2xl font-bold mb-4 text-gray-800">STAR Analysis</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                  <p className="font-bold text-yellow-800 mb-2 text-sm">SITUATION</p>
                  <p className="text-xs text-gray-700">Engineering team managing 50,000+ PDF files across G:\ and Z:\ network drives. Manual file operations taking 8-10 hours weekly. No bulk operations capability. File moves causing production delays when wrong files deleted. Need to process 1000+ files weekly for project organization.</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="font-bold text-blue-800 mb-2 text-sm">TASK</p>
                  <p className="text-xs text-gray-700 mb-2">Build enterprise file operations platform with:</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• Bulk PDF search and copy operations</li>
                    <li>• Real-time progress tracking via web interface</li>
                    <li>• Multi-threaded processing (20+ parallel threads)</li>
                    <li>• Pause/resume capability for long operations</li>
                    <li>• Excel integration for part number batch processing</li>
                    <li>• Safe file review with manual approval workflow</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-bold text-green-800 mb-2 text-sm">ACTION</p>
                  <div className="text-xs text-gray-700 space-y-2">
                    <div>
                      <p className="font-semibold text-gray-800">Phase 1: Core Engine (Week 1-3)</p>
                      <p>• Built multi-threaded file search across network drives</p>
                      <p>• Implemented ThreadPoolExecutor for 20 parallel workers</p>
                      <p>• Created duplicate detection using file size + modified date</p>
                      <p>• Developed Flask + SocketIO for real-time web interface</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Phase 2: Advanced Features (Week 4-6)</p>
                      <p>• Added Excel number extractor with ProcessPoolExecutor</p>
                      <p>• Built pause/resume functionality with operation state persistence</p>
                      <p>• Created serial folder operations manager</p>
                      <p>• Implemented File Deleter GUI with Tkinter for manual review</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Phase 3: Production (Week 7-8)</p>
                      <p>• Deployed web interface with real-time progress tracking</p>
                      <p>• Created PyInstaller build for File Deleter desktop app</p>
                      <p>• Comprehensive testing with 10,000+ file operations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-purple-500">
              <p className="font-bold text-purple-800 mb-3 text-sm">RESULT</p>
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-purple-50 p-2 rounded text-center">
                    <p className="text-xl font-bold text-purple-600">95%</p>
                    <p className="text-xs text-gray-600">Time saved</p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded text-center">
                    <p className="text-xl font-bold text-blue-600">1000+</p>
                    <p className="text-xs text-gray-600">Files/week processed</p>
                  </div>
                </div>
                <div className="text-xs text-gray-700 space-y-1 bg-gray-50 p-2 rounded">
                  <p>• File operations: 8 hrs → 25 min (95% faster)</p>
                  <p>• Processing capacity: 50 files → 1000+ files/week</p>
                  <p>• Zero data loss incidents (vs 2-3/year previously)</p>
                  <p>• $18K annual savings in labor costs</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-xl shadow-lg">
              <h4 className="font-bold mb-3 text-gray-800 text-sm">Technical Innovation</h4>
              <div className="space-y-2 text-xs">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="font-semibold text-blue-600 mb-1">Multi-Threading Architecture</p>
                  <p className="text-gray-600">20 parallel workers process files 20x faster than sequential. ThreadPoolExecutor manages worker lifecycle automatically.</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="font-semibold text-green-600 mb-1">Real-Time WebSocket Updates</p>
                  <p className="text-gray-600">Flask-SocketIO broadcasts progress every 100 files. Users see live status without polling server.</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="font-semibold text-purple-600 mb-1">Smart Duplicate Detection</p>
                  <p className="text-gray-600">Size + modified time comparison prevents unnecessary copies, saving storage and time.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-xl border-2 border-cyan-300">
            <p className="font-bold text-gray-800 mb-2">PM Learning: Scope Management Under Constraints</p>
            <p className="text-sm text-gray-700">Initial scope was simple file copier. User feedback revealed need for Excel integration, pause/resume, and manual review GUI. Applied timeboxing: delivered core features first, then added enhancements in subsequent sprints. Result: 3 tools (Web + Excel + Desktop) instead of 1.</p>
          </div>
        </div>
      )
    },

    // Data Extractor - STAR Method
    {
      type: 'content',
      title: 'Project 5: Data Extractor Suite',
      icon: Zap,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center space-x-4 mb-3">
              <div className="bg-white/20 p-3 rounded-lg">
                <Zap size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Data Extractor: Multi-Method OCR Engine</h3>
                <p className="text-lg opacity-90">4 AI extraction methods + LLM validation = 93% faster processing</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-gray-800">STAR Breakdown</h4>
              <div className="space-y-3">
                <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-500">
                  <p className="font-bold text-red-800 mb-1 text-xs">SITUATION</p>
                  <p className="text-xs text-gray-700">200+ engineering BOM drawings arriving weekly. Manual Excel entry taking 45 min/document. 15% error rate causing rework. 2-week backlog of unprocessed drawings. Production delays waiting for BOM data.</p>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                  <p className="font-bold text-blue-800 mb-1 text-xs">TASK</p>
                  <p className="text-xs text-gray-700">Create automated BOM extraction system supporting multiple document qualities (scanned, digital, mixed). Target: 3 min/document, under 2% error rate. Must handle varying table formats from different suppliers.</p>
                </div>
                
                <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                  <p className="font-bold text-green-800 mb-1 text-xs">ACTION</p>
                  <div className="text-xs text-gray-700 space-y-1">
                    <p className="font-semibold">Multi-Method Approach:</p>
                    <p>• Method 1: LayoutParser + PaddleOCR (scanned docs)</p>
                    <p>• Method 2: OpenCV + Tesseract (simple tables)</p>
                    <p>• Method 3: Embedded Llama LLM (complex layouts)</p>
                    <p>• Method 4: OpenRouter/GPT-4 (highest accuracy)</p>
                    <p className="font-semibold mt-1">Validation Pipeline:</p>
                    <p>• Dual-LLM validation (Generator + Validator)</p>
                    <p>• Automated quality scoring and confidence metrics</p>
                    <p>• Flagging system for manual review of low-confidence extractions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-purple-500">
                <p className="font-bold text-purple-800 mb-3 text-sm">RESULT</p>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="bg-green-50 p-2 rounded text-center">
                    <p className="text-2xl font-bold text-green-600">93%</p>
                    <p className="text-xs text-gray-600">Time reduction</p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded text-center">
                    <p className="text-2xl font-bold text-blue-600">85%</p>
                    <p className="text-xs text-gray-600">Error reduction</p>
                  </div>
                  <div className="bg-purple-50 p-2 rounded text-center">
                    <p className="text-2xl font-bold text-purple-600">20x</p>
                    <p className="text-xs text-gray-600">Speed increase</p>
                  </div>
                </div>
                <div className="text-xs text-gray-700 space-y-1">
                  <p>• Processing time: 45 min → 3 min per document</p>
                  <p>• Error rate: 15% → under 2%</p>
                  <p>• Weekly capacity: 50 → 1000+ documents</p>
                  <p>• Backlog eliminated in first month of deployment</p>
                  <p>• $78,700 annual value ($63.7K time + $15K error avoidance)</p>
                  <p>• 884% ROI ($78.7K value / $8K cost)</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-xl border-2 border-orange-300">
                <h4 className="font-bold mb-2 text-sm text-gray-800">Method Comparison</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">LayoutParser + PaddleOCR</span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded font-semibold">Best for scanned</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">OpenCV + Tesseract</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded font-semibold">Fast, simple</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Embedded Llama</span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded font-semibold">No internet needed</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">OpenRouter GPT-4</span>
                    <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded font-semibold">Highest accuracy</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-lg">
                <h4 className="font-bold mb-3 text-sm text-gray-800">System Capabilities</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                    <span className="text-gray-700">Process 1000+ PDFs in batch mode</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                    <span className="text-gray-700">Real-time WebSocket progress updates</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                    <span className="text-gray-700">Pause/resume for resource management</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                    <span className="text-gray-700">Excel integration for part numbers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                    <span className="text-gray-700">Interactive file review GUI</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                    <span className="text-gray-700">Comprehensive logging and error handling</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="font-bold mb-4 text-gray-800">Technical Architecture: Multi-Method Processing Pipeline</h4>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg">
              <div className="space-y-3">
                <div className="text-center bg-blue-500 text-white p-2 rounded-lg text-sm font-semibold">PDF Document Input</div>
                <div className="flex justify-center"><div className="text-blue-500 text-2xl">↓</div></div>
                <div className="text-center bg-purple-500 text-white p-2 rounded-lg text-sm font-semibold">Quality Assessment & Method Selection</div>
                <div className="flex justify-center space-x-1">
                  <div className="text-purple-500">↓</div>
                  <div className="text-purple-500">↓</div>
                  <div className="text-purple-500">↓</div>
                  <div className="text-purple-500">↓</div>
                </div>
                <div className="grid grid-cols-4 gap-1">
                  <div className="bg-green-100 border border-green-500 p-2 rounded text-center text-xs">
                    <p className="font-semibold text-green-800">LayoutParser</p>
                    <p className="text-gray-600">+ PaddleOCR</p>
                  </div>
                  <div className="bg-blue-100 border border-blue-500 p-2 rounded text-center text-xs">
                    <p className="font-semibold text-blue-800">OpenCV</p>
                    <p className="text-gray-600">+ Tesseract</p>
                  </div>
                  <div className="bg-orange-100 border border-orange-500 p-2 rounded text-center text-xs">
                    <p className="font-semibold text-orange-800">Embedded</p>
                    <p className="text-gray-600">Llama 3b</p>
                  </div>
                  <div className="bg-red-100 border border-red-500 p-2 rounded text-center text-xs">
                    <p className="font-semibold text-red-800">OpenRouter</p>
                    <p className="text-gray-600">GPT-4</p>
                  </div>
                </div>
                <div className="flex justify-center"><div className="text-green-500 text-2xl">↓</div></div>
                <div className="text-center bg-indigo-500 text-white p-2 rounded-lg text-sm font-semibold">Dual-LLM Validation Layer</div>
                <div className="flex justify-center"><div className="text-indigo-500 text-2xl">↓</div></div>
                <div className="text-center bg-green-500 text-white p-2 rounded-lg text-sm font-semibold">Structured CSV/Excel Output</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border-2 border-blue-300">
            <p className="font-bold text-gray-800 mb-2">PM Insight: Risk Mitigation Through Redundancy</p>
            <p className="text-sm text-gray-700">Built 4 extraction methods because no single approach handles all document types. This redundancy design pattern from manufacturing (backup systems) ensures 99%+ processing success rate across varying document qualities.</p>
          </div>
        </div>
      )
    },

    // BlobCheck - STAR Method
    {
      type: 'content',
      title: 'Project 6: BlobCheck Data Integrity Monitor',
      icon: CheckCircle,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center space-x-4 mb-3">
              <div className="bg-white/20 p-3 rounded-lg">
                <CheckCircle size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-bold">BlobCheck: Azure-SQL Sync Guardian</h3>
                <p className="text-lg opacity-90">Automated data integrity verification preventing production delays</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-2xl font-bold mb-4 text-gray-800">STAR Analysis</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <p className="font-bold text-red-800 mb-2 text-sm">SITUATION</p>
                  <p className="text-xs text-gray-700">Files stored in Azure Blob Storage, metadata in SQL Server. Sync failures causing ~200 mismatches. Production delays when files missing from either system. Manual verification taking 8 hours monthly. 4-6 downtime incidents yearly costing $20K.</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="font-bold text-blue-800 mb-2 text-sm">TASK</p>
                  <p className="text-xs text-gray-700">Build automated verification system to: Identify Azure-SQL mismatches daily, Generate detailed CSV reports, Detect duplicate database entries, Run in under 15 minutes, Enable proactive issue resolution. Target 100% data accuracy.</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-bold text-green-800 mb-2 text-sm">ACTION</p>
                  <div className="text-xs text-gray-700 space-y-1">
                    <p className="font-semibold">Week 1: Analysis</p>
                    <p>• Mapped data flow: Azure uploads → SQL metadata writes</p>
                    <p>• Identified failure points in sync process</p>
                    <p className="font-semibold mt-1">Week 2-3: Development</p>
                    <p>• Built path normalization engine (handles URLs, backslashes, case)</p>
                    <p>• Created Azure ContainerClient integration with SAS URL</p>
                    <p>• Implemented pyodbc SQL queries with dynamic driver selection</p>
                    <p>• Built set-based comparison algorithm (O(1) lookups)</p>
                    <p>• Generated 5 different CSV reports for various stakeholders</p>
                    <p className="font-semibold mt-1">Week 4: Production</p>
                    <p>• Deployed as scheduled task (daily runs)</p>
                    <p>• Created alert system for mismatches over threshold</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                  <p className="font-bold text-purple-800 mb-3 text-sm">RESULT</p>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="bg-white p-2 rounded text-center shadow-sm">
                      <p className="text-xl font-bold text-green-600">97%</p>
                      <p className="text-xs text-gray-600">Time saved</p>
                    </div>
                    <div className="bg-white p-2 rounded text-center shadow-sm">
                      <p className="text-xl font-bold text-blue-600">100%</p>
                      <p className="text-xs text-gray-600">Data accuracy</p>
                    </div>
                    <div className="bg-white p-2 rounded text-center shadow-sm">
                      <p className="text-xl font-bold text-purple-600">0</p>
                      <p className="text-xs text-gray-600">Downtime events</p>
                    </div>
                    <div className="bg-white p-2 rounded text-center shadow-sm">
                      <p className="text-xl font-bold text-orange-600">$25K</p>
                      <p className="text-xs text-gray-600">Annual value</p>
                    </div>
                  </div>
                  <div className="text-xs text-gray-700 space-y-1 bg-gray-50 p-2 rounded">
                    <p>• Verification time: 8 hrs/month → 15 min/day</p>
                    <p>• Proactive issue detection preventing downtime</p>
                    <p>• Zero production delays since deployment (4 months)</p>
                    <p>• $25K annual value ($5K labor + $20K downtime avoidance)</p>
                    <p>• 733% ROI in Year 1</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <h4 className="font-bold mb-3 text-sm text-gray-800">Technical Deep Dive</h4>
                  <div className="space-y-2 text-xs">
                    <div className="bg-blue-50 p-2 rounded">
                      <p className="font-semibold text-blue-800">Intelligent Path Normalization</p>
                      <p className="text-gray-600">Handles URLs, backslashes, case sensitivity, URL encoding. Critical for accurate comparison across systems.</p>
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      <p className="font-semibold text-green-800">Set-Based Comparison</p>
                      <p className="text-gray-600">O(1) lookups using Python sets. Processes 10,000+ files in under 1 minute.</p>
                    </div>
                    <div className="bg-purple-50 p-2 rounded">
                      <p className="font-semibold text-purple-800">Dynamic Driver Selection</p>
                      <p className="text-gray-600">Auto-detects ODBC drivers (18 → 17 → error). Improves deployment across different servers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-xl border-2 border-green-300">
            <p className="font-bold text-gray-800 mb-2">PM Learning: Preventive Maintenance > Reactive Fixes</p>
            <p className="text-sm text-gray-700">Applied TPM principle from Hero MotoCorp: prevent problems before they occur. Daily automated checks detect issues before they impact production, saving $20K annually in downtime costs. Classic example of small investment (3-week project) preventing large losses.</p>
          </div>
        </div>
      )
    },

    // Nameplates & Tags - STAR Method
    {
      type: 'content',
      title: 'Project 7: Nameplates & Tags AI Vision Extractor',
      icon: Camera,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center space-x-4 mb-3">
              <div className="bg-white/20 p-3 rounded-lg">
                <Target size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Nameplates & Tags: Computer Vision Data Extraction</h3>
                <p className="text-lg opacity-90">GPT-4 Vision API transforming equipment photos to structured database records</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-gray-800">STAR Analysis</h4>
              <div className="space-y-3">
                <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-500">
                  <p className="font-bold text-red-800 mb-1 text-xs">SITUATION</p>
                  <p className="text-xs text-gray-700">After-sales team manually transcribing equipment specifications from nameplate photos and motor tags. Processing 50-100 equipment records monthly. Each record taking 15-20 minutes of manual data entry. High error rate (12%) due to blurry photos, worn nameplates, and illegible text. Database incomplete with 30% missing specifications.</p>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                  <p className="font-bold text-blue-800 mb-1 text-xs">TASK</p>
                  <p className="text-xs text-gray-700">Build AI vision system to: Extract specs from nameplate/tag photos automatically, Support multiple motor types and formats, Validate extracted data with human review interface, Integrate with EquipmentDB SQL Server, Achieve under 5% error rate. Target: 5 minutes/record including validation.</p>
                </div>
                
                <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                  <p className="font-bold text-green-800 mb-1 text-xs">ACTION</p>
                  <div className="text-xs text-gray-700 space-y-1">
                    <p className="font-semibold">Phase 1: AI Integration (Week 1-2)</p>
                    <p>• Integrated OpenAI GPT-4 Vision API for image analysis</p>
                    <p>• Created specialized prompts for nameplates vs motor tags</p>
                    <p>• Implemented zero-temperature inference for consistency</p>
                    <p className="font-semibold mt-1">Phase 2: GUI Development (Week 3-4)</p>
                    <p>• Built TtkBootstrap desktop app with dark theme</p>
                    <p>• Created image preview with zoom, rotate, pan controls</p>
                    <p>• Designed validation interface for manual correction</p>
                    <p>• Implemented temporary table workflow for review before final save</p>
                    <p className="font-semibold mt-1">Phase 3: Testing (Week 5-6)</p>
                    <p>• Tested with 200+ real nameplate photos from field</p>
                    <p>• Refined prompts based on extraction accuracy</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-purple-500">
                <p className="font-bold text-purple-800 mb-3 text-sm">RESULT</p>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-purple-50 p-2 rounded text-center">
                    <p className="text-2xl font-bold text-purple-600">70%</p>
                    <p className="text-xs text-gray-600">Time reduction</p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded text-center">
                    <p className="text-2xl font-bold text-blue-600">88%</p>
                    <p className="text-xs text-gray-600">Error reduction</p>
                  </div>
                  <div className="bg-green-50 p-2 rounded text-center">
                    <p className="text-2xl font-bold text-green-600">100+</p>
                    <p className="text-xs text-gray-600">Records/month</p>
                  </div>
                  <div className="bg-orange-50 p-2 rounded text-center">
                    <p className="text-2xl font-bold text-orange-600">$15K</p>
                    <p className="text-xs text-gray-600">Annual value</p>
                  </div>
                </div>
                <div className="text-xs text-gray-700 space-y-1">
                  <p>• Processing time: 18 min → 5 min (including review)</p>
                  <p>• Error rate: 12% → 1.5% (88% improvement)</p>
                  <p>• Monthly capacity: 50 → 100+ records</p>
                  <p>• Database completeness: 70% → 95%</p>
                  <p>• $15K annual savings in labor + error avoidance</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-lg">
                <h4 className="font-bold mb-3 text-sm text-gray-800">AI Vision Workflow</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                    <div className="flex-1 bg-blue-50 p-2 rounded text-xs">Upload nameplate/tag photo</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                    <div className="flex-1 bg-green-50 p-2 rounded text-xs">GPT-4 Vision extracts specs</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                    <div className="flex-1 bg-purple-50 p-2 rounded text-xs">Human validation in GUI</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
                    <div className="flex-1 bg-orange-50 p-2 rounded text-xs">Temp table → Final EquipmentDB</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-xl border-2 border-red-300">
                <p className="font-bold text-sm mb-2 text-gray-800">Innovation: Two-Phase Validation</p>
                <p className="text-xs text-gray-700">AI extracts data fast but imperfectly. Human validates in optimized GUI before final database commit. Best of both worlds: AI speed + human accuracy = 70% time saved with 88% fewer errors.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // VDRS360 - STAR Method  
    {
      type: 'content',
      title: 'Project 8: VDRS360 Equipment Management Platform',
      icon: Settings,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center space-x-4 mb-3">
              <div className="bg-white/20 p-3 rounded-lg">
                <Settings size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-bold">VDRS360: Enterprise Equipment Management</h3>
                <p className="text-lg opacity-90">Full-stack Streamlit platform with dual-database architecture & network visualization</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-gray-800">STAR Framework</h4>
              <div className="space-y-3">
                <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-500">
                  <p className="font-bold text-yellow-800 mb-1 text-xs">SITUATION</p>
                  <p className="text-xs text-gray-700">Equipment data scattered across Excel files, SharePoint, and legacy databases. No centralized system for equipment lifecycle tracking. Equipment specifications varying by type (balers have different specs than optical sorters). Cross-referencing customer-project-equipment relationships taking hours. Network analysis impossible without visual tools.</p>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                  <p className="font-bold text-blue-800 mb-1 text-xs">TASK</p>
                  <p className="text-xs text-gray-700">Build enterprise equipment management platform with: Dynamic specification mapping per equipment type, Excel-like editing interface, Advanced multi-field search, Network visualization of relationships, Dual-database architecture (TestDB + PowerApps), Complete audit trail. Must handle 5000+ equipment records efficiently.</p>
                </div>
                
                <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                  <p className="font-bold text-green-800 mb-1 text-xs">ACTION</p>
                  <div className="text-xs text-gray-700 space-y-1">
                    <p className="font-semibold">Architecture (Week 1-2)</p>
                    <p>• Designed modular architecture: separate modules for Manager, Search, Visualization</p>
                    <p>• Created dual-database system: TestDB (operations) + PowerApps (reference)</p>
                    <p>• Built shared configuration system across modules</p>
                    <p className="font-semibold mt-1">Development (Week 3-8)</p>
                    <p>• Equipment Manager: Excel-like interface with intelligent change detection</p>
                    <p>• Search Module: Multi-field filtering with dynamic specification mapping</p>
                    <p>• Network Viz: NetworkX + PyVis for interactive relationship graphs</p>
                    <p>• Implemented SQLAlchemy ORM for database abstraction</p>
                    <p className="font-semibold mt-1">Deploy (Week 9-10)</p>
                    <p>• Streamlit cloud deployment with session management</p>
                    <p>• Comprehensive testing with 5000+ record dataset</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-purple-500">
                <p className="font-bold text-purple-800 mb-3 text-sm">RESULT</p>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-green-50 p-2 rounded text-center">
                    <p className="text-2xl font-bold text-green-600">85%</p>
                    <p className="text-xs text-gray-600">Search time saved</p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded text-center">
                    <p className="text-2xl font-bold text-blue-600">5000+</p>
                    <p className="text-xs text-gray-600">Records managed</p>
                  </div>
                  <div className="bg-purple-50 p-2 rounded text-center">
                    <p className="text-2xl font-bold text-purple-600">100%</p>
                    <p className="text-xs text-gray-600">Data centralization</p>
                  </div>
                  <div className="bg-orange-50 p-2 rounded text-center">
                    <p className="text-2xl font-bold text-orange-600">3 min</p>
                    <p className="text-xs text-gray-600">Avg search time</p>
                  </div>
                </div>
                <div className="text-xs text-gray-700 space-y-1">
                  <p>• Equipment search: 20 min → 3 min (85% faster)</p>
                  <p>• All equipment data centralized (vs 5 systems)</p>
                  <p>• Network visualization reveals hidden relationships</p>
                  <p>• Equipment lifecycle fully tracked from install to decommission</p>
                  <p>• Data quality improved through validation and audit trails</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-xl shadow-lg">
                <h4 className="font-bold mb-3 text-sm text-gray-800">System Architecture</h4>
                <div className="bg-white p-3 rounded-lg">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-700">Frontend</span>
                      <span className="font-semibold text-blue-600">Streamlit + Custom CSS</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-700">ORM</span>
                      <span className="font-semibold text-green-600">SQLAlchemy</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-700">Databases</span>
                      <span className="font-semibold text-purple-600">Dual SQL Server</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-700">Visualization</span>
                      <span className="font-semibold text-orange-600">NetworkX + PyVis</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-xl border-2 border-teal-300">
                <p className="font-bold text-sm mb-2 text-gray-800">Key Innovation: Dynamic Spec Mapping</p>
                <p className="text-xs text-gray-700">Each equipment type (Baler, Optical Sorter, Conveyor) has different specifications. System dynamically loads relevant spec fields from database, creating custom data entry forms. No hardcoded fields = supports unlimited equipment types.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="font-bold mb-4 text-gray-800">Data Flow: Equipment Management Lifecycle</h4>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg">
              <div className="grid grid-cols-5 gap-2 text-xs text-center">
                <div className="bg-blue-500 text-white p-3 rounded-lg font-semibold">Customer Selection</div>
                <div className="flex items-center justify-center text-blue-500 text-xl">→</div>
                <div className="bg-green-500 text-white p-3 rounded-lg font-semibold">Project Assignment</div>
                <div className="flex items-center justify-center text-green-500 text-xl">→</div>
                <div className="bg-purple-500 text-white p-3 rounded-lg font-semibold">Equipment Type</div>
              </div>
              <div className="flex justify-center my-2"><div className="text-purple-500 text-2xl">↓</div></div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-orange-100 border-2 border-orange-500 p-3 rounded-lg text-center">
                  <p className="font-semibold text-orange-800">Dynamic Specs Load</p>
                  <p className="text-gray-600">Equipment-specific fields</p>
                </div>
                <div className="bg-red-100 border-2 border-red-500 p-3 rounded-lg text-center">
                  <p className="font-semibold text-red-800">Data Entry/Edit</p>
                  <p className="text-gray-600">Excel-like interface</p>
                </div>
                <div className="bg-indigo-100 border-2 border-indigo-500 p-3 rounded-lg text-center">
                  <p className="font-semibold text-indigo-800">Change Detection</p>
                  <p className="text-gray-600">Smart save logic</p>
                </div>
              </div>
              <div className="flex justify-center my-2"><div className="text-indigo-500 text-2xl">↓</div></div>
              <div className="bg-green-500 text-white p-3 rounded-lg text-center font-semibold">SQL Server Storage + Audit Trail</div>
            </div>
          </div>
        </div>
      )
    },

    // Van Dyk Website - STAR Method
    {
      type: 'content',
      title: 'Project 9: Van Dyk Corporate Website',
      icon: Layout,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center space-x-4 mb-3">
              <div className="bg-white/20 p-3 rounded-lg">
                <Layout size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Van Dyk Website: Modern Corporate Presence</h3>
                <p className="text-lg opacity-90">React + TypeScript PWA with AI chatbot and advanced features</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-gray-800">STAR Analysis</h4>
              <div className="space-y-3">
                <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-500">
                  <p className="font-bold text-red-800 mb-1 text-xs">SITUATION</p>
                  <p className="text-xs text-gray-700">Existing website outdated, slow loading, not mobile-responsive. No intelligent search or chatbot assistance. Lead generation forms basic with no smart routing. No PWA capabilities or offline support. Competitor sites more modern, impacting brand perception and lead quality.</p>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                  <p className="font-bold text-blue-800 mb-1 text-xs">TASK</p>
                  <p className="text-xs text-gray-700">Modernize corporate website with: React 18 + TypeScript stack, Mobile-first responsive design, AI-powered chatbot, Real-time search functionality, Progressive Web App capabilities, Comprehensive equipment showcase. Target: Under 2-second load time, 90+ Lighthouse score.</p>
                </div>
                
                <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                  <p className="font-bold text-green-800 mb-1 text-xs">ACTION</p>
                  <div className="text-xs text-gray-700 space-y-1">
                    <p className="font-semibold">Design & Planning (Week 1-2)</p>
                    <p>• Analyzed competitor sites and industry best practices</p>
                    <p>• Created component library and design system</p>
                    <p>• Mapped user journeys and conversion funnels</p>
                    <p className="font-semibold mt-1">Development (Week 3-10)</p>
                    <p>• Built with Vite + React 18 for optimal performance</p>
                    <p>• Implemented lazy loading for code splitting</p>
                    <p>• Created smart chatbot with tree-based navigation</p>
                    <p>• Designed responsive layouts with Tailwind CSS</p>
                    <p>• Added Service Worker for PWA capabilities</p>
                    <p>• Integrated Framer Motion for smooth animations</p>
                    <p className="font-semibold mt-1">Deploy & Optimize (Week 11-12)</p>
                    <p>• Vercel deployment with edge functions</p>
                    <p>• Image optimization (WebP with fallbacks)</p>
                    <p>• Lighthouse optimization to 95+ score</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-purple-500">
                <p className="font-bold text-purple-800 mb-3 text-sm">RESULT</p>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-green-50 p-2 rounded text-center">
                    <p className="text-2xl font-bold text-green-600">65%</p>
                    <p className="text-xs text-gray-600">Load time improvement</p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded text-center">
                    <p className="text-2xl font-bold text-blue-600">95+</p>
                    <p className="text-xs text-gray-600">Lighthouse score</p>
                  </div>
                  <div className="bg-purple-50 p-2 rounded text-center">
                    <p className="text-2xl font-bold text-purple-600">40%</p>
                    <p className="text-xs text-gray-600">Mobile traffic increase</p>
                  </div>
                  <div className="bg-orange-50 p-2 rounded text-center">
                    <p className="text-2xl font-bold text-orange-600">PWA</p>
                    <p className="text-xs text-gray-600">Offline capable</p>
                  </div>
                </div>
                <div className="text-xs text-gray-700 space-y-1">
                  <p>• Page load: 5.8s → 1.9s (65% faster)</p>
                  <p>• Mobile responsiveness score: 100/100</p>
                  <p>• Smart chatbot reduces support inquiries</p>
                  <p>• PWA installable on mobile devices</p>
                  <p>• SEO improvements driving 25% more organic traffic</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-lg">
                <h4 className="font-bold mb-3 text-sm text-gray-800">Tech Stack Highlights</h4>
                <div className="space-y-2 text-xs">
                  <div className="bg-blue-50 p-2 rounded">
                    <p className="font-semibold text-blue-800">React 18 + TypeScript</p>
                    <p className="text-gray-600">Type-safe modern framework with concurrent rendering</p>
                  </div>
                  <div className="bg-green-50 p-2 rounded">
                    <p className="font-semibold text-green-800">Vite Build System</p>
                    <p className="text-gray-600">Lightning-fast HMR, optimized production builds</p>
                  </div>
                  <div className="bg-purple-50 p-2 rounded">
                    <p className="font-semibold text-purple-800">Framer Motion</p>
                    <p className="text-gray-600">Smooth animations and micro-interactions</p>
                  </div>
                  <div className="bg-orange-50 p-2 rounded">
                    <p className="font-semibold text-orange-800">Service Worker</p>
                    <p className="text-gray-600">Offline capabilities and fast caching</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border-2 border-blue-300">
                <p className="font-bold text-sm mb-2 text-gray-800">PM Learning: Performance = Business Value</p>
                <p className="text-xs text-gray-700">Every second of load time impacts conversion. Optimized from 5.8s to 1.9s through: code splitting, image optimization, lazy loading, edge caching. Result: 15% increase in quote requests (faster site = more leads).</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="font-bold mb-4 text-gray-800">Website User Journey Flow</h4>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-blue-500 text-white p-2 rounded text-center text-xs font-semibold">Landing Page</div>
                  <div className="text-blue-500">→</div>
                  <div className="flex-1 bg-green-500 text-white p-2 rounded text-center text-xs font-semibold">Equipment Browse</div>
                  <div className="text-green-500">→</div>
                  <div className="flex-1 bg-purple-500 text-white p-2 rounded text-center text-xs font-semibold">Solutions Page</div>
                </div>
                <div className="flex justify-center"><div className="text-purple-500 text-xl">↓</div></div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="bg-orange-100 border border-orange-500 p-2 rounded text-center">
                    <p className="font-semibold text-orange-800">Smart Chatbot</p>
                    <p className="text-gray-600">Instant assistance</p>
                  </div>
                  <div className="bg-red-100 border border-red-500 p-2 rounded text-center">
                    <p className="font-semibold text-red-800">Real-time Search</p>
                    <p className="text-gray-600">Find content fast</p>
                  </div>
                  <div className="bg-indigo-100 border border-indigo-500 p-2 rounded text-center">
                    <p className="font-semibold text-indigo-800">Quote Form</p>
                    <p className="text-gray-600">Lead capture</p>
                  </div>
                </div>
                <div className="flex justify-center"><div className="text-green-500 text-xl">↓</div></div>
                <div className="bg-green-500 text-white p-2 rounded text-center font-semibold text-sm">Conversion: Quote Request or Contact</div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Van Dyk Tools Suite - STAR Method
    {
      type: 'content',
      title: 'Project 10: Van Dyk Tools - Integrated Platform',
      icon: GitBranch,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center space-x-4 mb-3">
              <div className="bg-white/20 p-3 rounded-lg">
                <GitBranch size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Van Dyk Tools: All-in-One Platform</h3>
                <p className="text-lg opacity-90">Unified Flask platform integrating all data processing tools with centralized config</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-gray-800">STAR Framework</h4>
              <div className="space-y-3">
                <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-500">
                  <p className="font-bold text-yellow-800 mb-1 text-xs">SITUATION</p>
                  <p className="text-xs text-gray-700">7 separate tools running independently: PDF Matcher, RAG System, Data Extractor, etc. Each with own config, logging, and launch procedure. Users confused about which tool to use when. No centralized monitoring or configuration management. Duplicate code across projects.</p>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                  <p className="font-bold text-blue-800 mb-1 text-xs">TASK</p>
                  <p className="text-xs text-gray-700">Create unified platform that: Integrates all tools in single web interface, Centralizes configuration management, Provides unified logging and monitoring, Enables one-click launch, Shares common utilities across tools, Maintains individual tool functionality while reducing overhead.</p>
                </div>
                
                <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                  <p className="font-bold text-green-800 mb-1 text-xs">ACTION</p>
                  <div className="text-xs text-gray-700 space-y-1">
                    <p className="font-semibold">Architecture (Week 1-2)</p>
                    <p>• Designed plugin architecture for tool integration</p>
                    <p>• Created config_manager.py for centralized settings</p>
                    <p>• Built enhanced_logger.py with multi-handler logging</p>
                    <p className="font-semibold mt-1">Integration (Week 3-6)</p>
                    <p>• Migrated PDF Matcher to Flask routes</p>
                    <p>• Integrated AI Extractor with shared OpenAI client</p>
                    <p>• Added Serial Copier with WebSocket progress</p>
                    <p>• Unified all database connections through shared utils</p>
                    <p className="font-semibold mt-1">Enhancement (Week 7-8)</p>
                    <p>• Created launch_app.py one-click launcher</p>
                    <p>• Built comprehensive web dashboard</p>
                    <p>• Added system health monitoring</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-purple-500">
                <p className="font-bold text-purple-800 mb-3 text-sm">RESULT</p>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div className="bg-green-50 p-2 rounded text-center">
                    <p className="text-xl font-bold text-green-600">1-Click</p>
                    <p className="text-xs text-gray-600">Launch process</p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded text-center">
                    <p className="text-xl font-bold text-blue-600">7 Tools</p>
                    <p className="text-xs text-gray-600">Integrated</p>
                  </div>
                  <div className="bg-purple-50 p-2 rounded text-center">
                    <p className="text-xl font-bold text-purple-600">40%</p>
                    <p className="text-xs text-gray-600">Code reduction</p>
                  </div>
                  <div className="bg-orange-50 p-2 rounded text-center">
                    <p className="text-xl font-bold text-orange-600">Unified</p>
                    <p className="text-xs text-gray-600">Config & logs</p>
                  </div>
                </div>
                <div className="text-xs text-gray-700 space-y-1">
                  <p>• Single entry point vs 7 separate launches</p>
                  <p>• Shared code reduces duplication by 40%</p>
                  <p>• Centralized config simplifies deployment</p>
                  <p>• Unified logging improves troubleshooting</p>
                  <p>• New tool integration now takes 1 day vs 1 week</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-xl shadow-lg">
                <h4 className="font-bold mb-3 text-sm text-gray-800">Integrated Tools</h4>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={14} />
                    <span className="text-gray-700">PDF Matcher (file operations)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={14} />
                    <span className="text-gray-700">AI Extractor (GPT-4 Vision)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={14} />
                    <span className="text-gray-700">Serial Copier (folder ops)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={14} />
                    <span className="text-gray-700">Excel Comparator (validation)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={14} />
                    <span className="text-gray-700">File Organizer (management)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={14} />
                    <span className="text-gray-700">Data validation pipelines</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={14} />
                    <span className="text-gray-700">YOLO computer vision</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 p-4 rounded-xl border-2 border-violet-300">
                <p className="font-bold text-sm mb-2 text-gray-800">Architecture Innovation</p>
                <p className="text-xs text-gray-700">Plugin-based architecture allows adding new tools without modifying core. Each tool is a Flask Blueprint with shared config, logging, and database access. Like a mini-microservices platform in monolith form.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="font-bold mb-4 text-gray-800">Platform Architecture: Unified System</h4>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg">
              <div className="text-center bg-indigo-600 text-white p-3 rounded-lg text-sm font-semibold mb-3">Flask Web Application + SocketIO</div>
              <div className="grid grid-cols-3 gap-3 mb-3">
                <div className="bg-blue-100 border-2 border-blue-500 p-3 rounded-lg">
                  <p className="font-semibold text-xs text-blue-800 text-center mb-2">Shared Infrastructure</p>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p>• Config Manager</p>
                    <p>• Enhanced Logger</p>
                    <p>• DB Utilities</p>
                    <p>• Auth System</p>
                  </div>
                </div>
                <div className="bg-green-100 border-2 border-green-500 p-3 rounded-lg">
                  <p className="font-semibold text-xs text-green-800 text-center mb-2">Processing Tools</p>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p>• PDF Operations</p>
                    <p>• AI Extraction</p>
                    <p>• Serial Copier</p>
                    <p>• File Organizer</p>
                  </div>
                </div>
                <div className="bg-purple-100 border-2 border-purple-500 p-3 rounded-lg">
                  <p className="font-semibold text-xs text-purple-800 text-center mb-2">AI & Vision</p>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p>• GPT-4 Vision</p>
                    <p>• YOLO Pipelines</p>
                    <p>• OCR Engines</p>
                    <p>• Data Droppers</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mb-3"><div className="text-green-500 text-2xl">↓</div></div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-orange-100 border-2 border-orange-500 p-3 rounded-lg text-center">
                  <p className="font-semibold text-xs text-orange-800">Real-Time Progress</p>
                  <p className="text-xs text-gray-600">WebSocket updates</p>
                </div>
                <div className="bg-red-100 border-2 border-red-500 p-3 rounded-lg text-center">
                  <p className="font-semibold text-xs text-red-800">Centralized Logs</p>
                  <p className="text-xs text-gray-600">Multi-handler system</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Mobile App - STAR Method
    {
      type: 'content',
      title: 'Project 11: Van Dyk One Mobile App',
      icon: Rocket,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center space-x-4 mb-3">
              <div className="bg-white/20 p-3 rounded-lg">
                <Rocket size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Van Dyk One: Cross-Platform Field Operations</h3>
                <p className="text-lg opacity-90">React Native app bringing enterprise systems to technician pockets</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-gray-800">STAR Analysis</h4>
              <div className="space-y-3">
                <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-500">
                  <p className="font-bold text-yellow-800 mb-1 text-xs">SITUATION</p>
                  <p className="text-xs text-gray-700">Field technicians managing equipment, tickets, expenses using paper forms and phone calls. No mobile access to equipment database. Expense reports requiring office time post-visit. Service ticket updates delayed by 1-2 days. No offline capability during site visits.</p>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                  <p className="font-bold text-blue-800 mb-1 text-xs">TASK</p>
                  <p className="text-xs text-gray-700">Build cross-platform mobile app (iOS + Android + Web) with: Equipment management, Service ticket handling, Expense tracking, Site information, Offline-first architecture, Integration with existing SQL database. Based on Hero MotoCorp mobile success reducing admin by 60%.</p>
                </div>
                
                <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                  <p className="font-bold text-green-800 mb-1 text-xs">ACTION</p>
                  <div className="text-xs text-gray-700 space-y-1">
                    <p className="font-semibold">Phase 1: Foundation (Current)</p>
                    <p>• React Native 0.80 with TypeScript for type safety</p>
                    <p>• Tab-based navigation (Equipment, Tickets, Expenses, Site)</p>
                    <p>• Component architecture for reusability</p>
                    <p className="font-semibold mt-1">Phase 2: Integration (In Progress)</p>
                    <p>• SQL Server integration for real-time data</p>
                    <p>• Offline storage with sync when online</p>
                    <p>• Camera integration for photo documentation</p>
                    <p>• GPS for automatic site location tagging</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-5 rounded-xl border-2 border-yellow-400">
                <h4 className="font-bold mb-3 text-yellow-900 text-sm">STATUS: In Development</h4>
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-semibold text-gray-700">Core Architecture</span>
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-semibold text-gray-700">UI Components</span>
                      <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">70% Done</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '70%'}}></div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-semibold text-gray-700">Database Integration</span>
                      <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs">In Progress</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{width: '40%'}}></div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-semibold text-gray-700">Testing & Deployment</span>
                      <span className="bg-gray-400 text-white px-2 py-1 rounded text-xs">Planned</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-400 h-2 rounded-full" style={{width: '0%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-purple-500">
                <p className="font-bold text-purple-800 mb-3 text-sm">PROJECTED RESULT (Q2 2025 Launch)</p>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-purple-50 p-2 rounded text-center">
                    <p className="text-2xl font-bold text-purple-600">60%</p>
                    <p className="text-xs text-gray-600">Admin time saved</p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded text-center">
                    <p className="text-2xl font-bold text-blue-600">30+</p>
                    <p className="text-xs text-gray-600">Active users</p>
                  </div>
                </div>
                <div className="text-xs text-gray-700 space-y-1">
                  <p>• Projected $40K annual savings based on Hero MotoCorp mobile implementation</p>
                  <p>• Real-time equipment status vs next-day updates</p>
                  <p>• Expense reporting: same-day vs 3-5 day delay</p>
                  <p>• Service tickets created on-site vs back at office</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl shadow-lg">
                <h4 className="font-bold mb-3 text-sm text-gray-800">Technical Stack</h4>
                <div className="space-y-2 text-xs">
                  <div className="bg-white p-2 rounded flex justify-between">
                    <span className="text-gray-700">Framework</span>
                    <span className="font-semibold text-blue-600">React Native 0.80</span>
                  </div>
                  <div className="bg-white p-2 rounded flex justify-between">
                    <span className="text-gray-700">Language</span>
                    <span className="font-semibold text-green-600">TypeScript</span>
                  </div>
                  <div className="bg-white p-2 rounded flex justify-between">
                    <span className="text-gray-700">Navigation</span>
                    <span className="font-semibold text-purple-600">React Navigation</span>
                  </div>
                  <div className="bg-white p-2 rounded flex justify-between">
                    <span className="text-gray-700">State</span>
                    <span className="font-semibold text-orange-600">React Hooks + Context</span>
                  </div>
                  <div className="bg-white p-2 rounded flex justify-between">
                    <span className="text-gray-700">Platforms</span>
                    <span className="font-semibold text-red-600">iOS + Android + Web</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-4 rounded-xl border-2 border-pink-300">
            <p className="font-bold text-gray-800 mb-2">PM Insight: Learning from Manufacturing Mobile Success</p>
            <p className="text-sm text-gray-700">At Hero MotoCorp, mobile solutions for Smart Cell monitoring reduced administrative overhead by 60% and enabled real-time production visibility. Applying same pattern at VDRS: bring data to where work happens (field sites) vs requiring office visits for data entry.</p>
          </div>
        </div>
      )
    },

    // Technical Innovation Summary
    {
      type: 'content',
      title: 'Technical Innovation: Bridging Manufacturing & Modern Software',
      icon: Lightbulb,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold mb-2">Innovation Framework: Manufacturing Principles + AI Capabilities</h3>
            <p className="text-lg opacity-90">Leveraging Hero MotoCorp operational excellence with cutting-edge AI/ML</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
              <h4 className="text-xl font-bold mb-4 text-blue-600">From Hero MotoCorp Manufacturing</h4>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-semibold text-sm text-blue-800 mb-2">TPM (Total Productive Maintenance)</p>
                  <div className="text-xs text-gray-700 space-y-1">
                    <p className="font-semibold">At Hero: Applied To:</p>
                    <p>• Predictive maintenance reduced CNC downtime 83%</p>
                    <p>• Daily Management Systems tracked OEE in real-time</p>
                    <p>• Zero Breakdown initiatives via data-driven prevention</p>
                    <p className="font-semibold mt-2 text-green-700">At VDRS: Translated To:</p>
                    <p>• BlobCheck = preventive monitoring vs reactive fixes</p>
                    <p>• RAG System = 24/7 knowledge availability</p>
                    <p>• Automated verification preventing downtime</p>
                  </div>
                </div>

                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="font-semibold text-sm text-green-800 mb-2">Kaizen (Continuous Improvement)</p>
                  <div className="text-xs text-gray-700 space-y-1">
                    <p className="font-semibold">At Hero: Applied To:</p>
                    <p>• Led 15+ Kaizen projects saving ₹9M annually</p>
                    <p>• Small improvements compound: ₹28/vehicle × 1M vehicles = ₹28M</p>
                    <p className="font-semibold mt-2 text-green-700">At VDRS: Translated To:</p>
                    <p>• Iterative development with weekly user feedback</p>
                    <p>• Small features compound into major systems</p>
                    <p>• DykScribe started as simple recorder, now full Q&A platform</p>
                  </div>
                </div>

                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="font-semibold text-sm text-purple-800 mb-2">Data-Driven Decision Making</p>
                  <div className="text-xs text-gray-700 space-y-1">
                    <p className="font-semibold">At Hero: Applied To:</p>
                    <p>• Real-time dashboards improved OEE by 40%</p>
                    <p>• MTTR/MTBF analytics guided maintenance scheduling</p>
                    <p className="font-semibold mt-2 text-green-700">At VDRS: Translated To:</p>
                    <p>• Every system has usage analytics and ROI tracking</p>
                    <p>• Performance metrics guide feature prioritization</p>
                    <p>• Data proves business value to stakeholders</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-500">
                <h4 className="text-xl font-bold mb-4 text-purple-600">Modern AI/Software Capabilities</h4>
                <div className="space-y-3">
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="font-semibold text-sm text-purple-800 mb-2">Large Language Models (LLMs)</p>
                    <div className="text-xs text-gray-700 space-y-1">
                      <p>• GPT-4 for intelligent Q&A extraction from audio</p>
                      <p>• Whisper for SOTA speech-to-text transcription</p>
                      <p>• Mistral + Llama for BOM data extraction & validation</p>
                      <p>• Vanna AI for natural language to SQL conversion</p>
                      <p className="font-semibold mt-2 text-blue-700">Impact: Tasks impossible 2 years ago now automated</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="font-semibold text-sm text-blue-800 mb-2">Vector Databases & RAG</p>
                    <div className="text-xs text-gray-700 space-y-1">
                      <p>• ChromaDB for semantic document search</p>
                      <p>• Embeddings enable "understanding" vs keyword matching</p>
                      <p>• Retrieval Augmented Generation prevents AI hallucination</p>
                      <p className="font-semibold mt-2 text-blue-700">Impact: 93% faster information retrieval with citations</p>
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="font-semibold text-sm text-green-800 mb-2">Cloud-Native Architecture</p>
                    <div className="text-xs text-gray-700 space-y-1">
                      <p>• Azure Blob Storage for scalable file storage</p>
                      <p>• Azure SQL Database for high availability</p>
                      <p>• Serverless deployment reduces ops overhead</p>
                      <p className="font-semibold mt-2 text-blue-700">Impact: 99.9% uptime, infinite scalability, zero server management</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded-xl border-2 border-orange-300">
                <h4 className="font-bold mb-2 text-sm text-gray-800">The Multiplier Effect</h4>
                <p className="text-xs text-gray-700">Manufacturing expertise (TPM, Kaizen, data-driven) provides the <strong>operational framework</strong>. Modern AI/cloud provides the <strong>technological accelerator</strong>. Together: 10x productivity gains vs using either alone.</p>
                <p className="text-xs text-gray-700 mt-2 italic">Example: Hero's predictive maintenance reduced downtime 83%. VDRS's BlobCheck + RAG applies same preventive principle but with AI to achieve 97% time reduction - even better because AI handles complexity humans can't.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-3">Key Technical Achievements Across Portfolio</h4>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="bg-white/10 p-3 rounded-lg">
                <p className="font-semibold mb-2">AI/ML Integration</p>
                <ul className="text-xs opacity-90 space-y-1">
                  <li>• 6 different AI models deployed</li>
                  <li>• Vector databases for semantic search</li>
                  <li>• Multi-model validation pipelines</li>
                  <li>• Custom prompt engineering</li>
                </ul>
              </div>
              <div className="bg-white/10 p-3 rounded-lg">
                <p className="font-semibold mb-2">Cloud Architecture</p>
                <ul className="text-xs opacity-90 space-y-1">
                  <li>• Azure Blob Storage integration</li>
                  <li>• Azure SQL Database connections</li>
                  <li>• Serverless deployments</li>
                  <li>• Real-time WebSocket communication</li>
                </ul>
              </div>
              <div className="bg-white/10 p-3 rounded-lg">
                <p className="font-semibold mb-2">Full-Stack Development</p>
                <ul className="text-xs opacity-90 space-y-1">
                  <li>• React + React Native frontends</li>
                  <li>• Node.js + Flask backends</li>
                  <li>• SQL Server database design</li>
                  <li>• RESTful + WebSocket APIs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Cumulative Impact
    {
      type: 'content',
      title: 'Cumulative Impact: Portfolio ROI Analysis',
      icon: TrendingUp,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold mb-2">Portfolio Performance: $125K+ Annual Value Created</h3>
            <p className="text-xl opacity-90">7 Systems | 4 Months | Measurable Business Transformation</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-gray-800">Financial Impact by Project</h4>
              <div className="space-y-2">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg border-l-4 border-blue-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-gray-800 text-sm">DykScribe Q&A System</span>
                    <span className="text-xl font-bold text-blue-600">$35K</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>25 techs × 1.75 hrs/wk × $40/hr × 52 wks</span>
                    <span className="font-semibold text-green-600">900% ROI</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-3 rounded-lg border-l-4 border-purple-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-gray-800 text-sm">RAG AI Knowledge System</span>
                    <span className="text-xl font-bold text-purple-600">$45K</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>30 staff × 28 min/day × $45/hr × 220 days</span>
                    <span className="font-semibold text-green-600">770% ROI</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-lg border-l-4 border-green-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-gray-800 text-sm">Data Extractor Suite</span>
                    <span className="text-xl font-bold text-green-600">$28K</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>50 docs/wk × 42 min × $35/hr × 52 wks + $15K error avoidance</span>
                    <span className="font-semibold text-green-600">884% ROI</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-3 rounded-lg border-l-4 border-orange-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-gray-800 text-sm">GDrive File Operations</span>
                    <span className="text-xl font-bold text-orange-600">$18K</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>7.5 hrs/wk × $45/hr × 52 wks (file management labor)</span>
                    <span className="font-semibold text-green-600">550% ROI</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-3 rounded-lg border-l-4 border-teal-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-gray-800 text-sm">BlobCheck Verification</span>
                    <span className="text-xl font-bold text-teal-600">$12K</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>$5K labor savings + $20K downtime prevention</span>
                    <span className="font-semibold text-green-600">733% ROI</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-4 rounded-lg border-2 border-gray-400">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-800 text-lg">TOTAL ANNUAL VALUE</span>
                    <span className="text-3xl font-bold text-green-600">$138K</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600 mt-2">
                    <span>Total development cost (4 months)</span>
                    <span className="font-semibold">~$44K</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-800 mt-2 pt-2 border-t border-gray-300">
                    <span className="font-bold">Average ROI Across Portfolio</span>
                    <span className="font-bold text-green-600">813%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-6 rounded-xl shadow-lg">
                <h4 className="text-2xl font-bold mb-4">3-Year Projection</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm opacity-90 mb-1">Year 1 Value</p>
                    <p className="text-4xl font-bold">$138K</p>
                  </div>
                  <div>
                    <p className="text-sm opacity-90 mb-1">Year 2 Value (+ Mobile)</p>
                    <p className="text-4xl font-bold">$178K</p>
                  </div>
                  <div>
                    <p className="text-sm opacity-90 mb-1">Year 3 Value (Optimized)</p>
                    <p className="text-4xl font-bold">$210K</p>
                  </div>
                  <div className="border-t-2 border-white/30 pt-3 mt-3">
                    <p className="text-sm opacity-90 mb-1">3-Year Cumulative</p>
                    <p className="text-5xl font-bold">$526K</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-lg">
                <h4 className="font-bold mb-3 text-gray-800">Non-Financial Benefits</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={14} />
                    <span className="text-gray-700"><strong>Knowledge Preservation:</strong> 400+ Q&A sessions now searchable forever</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={14} />
                    <span className="text-gray-700"><strong>Competitive Advantage:</strong> AI capabilities competitors don't have</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={14} />
                    <span className="text-gray-700"><strong>Talent Attraction:</strong> Modern tech stack attracts top engineers</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={14} />
                    <span className="text-gray-700"><strong>Scalability:</strong> Systems ready for 3x business growth</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={14} />
                    <span className="text-gray-700"><strong>Quality:</strong> 85% reduction in errors improves customer satisfaction</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={14} />
                    <span className="text-gray-700"><strong>Compliance:</strong> Audit preparation 40 hrs → 2 hrs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl shadow-xl">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-4xl font-bold mb-1">813%</p>
                <p className="text-sm opacity-90">Average ROI</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-1">320+</p>
                <p className="text-sm opacity-90">Hours Saved/Month</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-1">85%</p>
                <p className="text-sm opacity-90">Error Reduction</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-1">7</p>
                <p className="text-sm opacity-90">Production Systems</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // PM Lessons Learned
    {
      type: 'content',
      title: 'PM Lessons Learned: From Manufacturing to Software',
      icon: Award,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold mb-2">Professional Growth: Translating 2 Years Manufacturing to Software PM</h3>
            <p className="text-lg opacity-90">Key learnings from managing 25 workers and $10M+ equipment to leading software projects</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-gray-800">Critical Success Factors</h4>
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="font-bold text-blue-800 mb-2 flex items-center text-sm">
                    <Users className="mr-2" size={18} />
                    User-Centered Design
                  </p>
                  <p className="text-xs text-gray-700 mb-2"><strong>Hero MotoCorp Learning:</strong> Spent time on factory floor with 25 workers understanding their daily struggles. Solutions that ignored worker input failed. Those co-created with workers succeeded.</p>
                  <p className="text-xs text-gray-700"><strong>VDRS Application:</strong> Shadowed technicians, observed real workflows, gathered feedback weekly. DykScribe success (92% adoption) came from building what users actually needed, not what I thought they needed.</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-bold text-green-800 mb-2 flex items-center text-sm">
                    <Target className="mr-2" size={18} />
                    Data-Driven Prioritization
                  </p>
                  <p className="text-xs text-gray-700 mb-2"><strong>Hero MotoCorp Learning:</strong> Limited budget required ROI justification for every Kaizen project. Learned to quantify time savings, cost reductions, quality improvements. TPM Special Award came from measurable results.</p>
                  <p className="text-xs text-gray-700"><strong>VDRS Application:</strong> Calculated ROI for every feature before building. DykScribe chosen over other ideas because it had clearest $35K annual value. Numbers drove stakeholder buy-in.</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                  <p className="font-bold text-purple-800 mb-2 flex items-center text-sm">
                    <Zap className="mr-2" size={18} />
                    Iterative Development
                  </p>
                  <p className="text-xs text-gray-700 mb-2"><strong>Hero MotoCorp Learning:</strong> Smart Cell dashboard evolved over 6 months through continuous feedback. Started basic, added features based on operator requests. Final version 3x more valuable than initial concept.</p>
                  <p className="text-xs text-gray-700"><strong>VDRS Application:</strong> Weekly demos and rapid iteration. DykScribe shipped MVP in 2 weeks, then enhanced based on usage patterns. RAG system added Vanna AI after seeing SQL query needs. Better to ship fast and improve than perfect on launch.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-4 text-gray-800">Stakeholder Management</h4>
                <div className="space-y-3">
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="font-semibold text-sm text-orange-800 mb-2">Lesson 1: Multiple Stakeholder Groups</p>
                    <p className="text-xs text-gray-700">CDMS had 3 distinct groups: suppliers (need easy upload), field techs (need quick access), management (need compliance). Balanced competing needs through iterative prototyping and weekly demos.</p>
                  </div>

                  <div className="bg-red-50 p-3 rounded-lg">
                    <p className="font-semibold text-sm text-red-800 mb-2">Lesson 2: Change Management</p>
                    <p className="text-xs text-gray-700">People resist new tools. At Hero, got buy-in by showing time savings first, not technical features. At VDRS, led with "save 87% of your documentation time" not "uses GPT-4 and Whisper." Results matter more than technology.</p>
                  </div>

                  <div className="bg-teal-50 p-3 rounded-lg">
                    <p className="font-semibold text-sm text-teal-800 mb-2">Lesson 3: Technical Debt Management</p>
                    <p className="text-xs text-gray-700">Learned from Hero's legacy systems: build with future in mind. All VDRS systems use modular architecture, proper logging, documentation. Prevents "quick hack" becoming unmaintainable nightmare.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-5 rounded-xl shadow-lg">
                <h4 className="font-bold mb-3 text-lg">Greatest PM Learning</h4>
                <p className="text-sm opacity-90 italic">"Manufacturing taught me that every minute of waste costs money, and every error compounds. Software development taught me that automation can eliminate both. The intersection is where I create the most value."</p>
                <p className="text-xs opacity-75 mt-3">- Translating TPM principles (predictive maintenance, zero defects, continuous improvement) into software context created systems that prevented problems before they occurred, not just fixed them faster.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Future Roadmap
    {
      type: 'content',
      title: 'Future Roadmap: Phase 2 Enhancements',
      icon: Rocket,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold mb-2">Next 6-12 Months: Scaling from $138K to $210K+ Annual Value</h3>
            <p className="text-lg opacity-90">Strategic enhancements to multiply existing system value</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl shadow-lg border-t-4 border-blue-500">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Rocket size={24} className="text-blue-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">Q1 2025: Mobile App Launch</h4>
                </div>
                <div className="text-sm text-gray-700 space-y-2">
                  <p className="font-semibold text-blue-600">Complete Van Dyk One deployment</p>
                  <ul className="text-xs space-y-1 ml-4">
                    <li>• Finish database integration and offline sync</li>
                    <li>• Deploy to iOS App Store and Google Play</li>
                    <li>• Train 30+ field technicians</li>
                    <li>• Integration with CDMS for document access</li>
                  </ul>
                  <div className="bg-blue-50 p-2 rounded mt-2">
                    <p className="text-xs"><strong>Projected Impact:</strong> $40K additional annual value, 60% reduction in admin overhead</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-lg border-t-4 border-green-500">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Lightbulb size={24} className="text-green-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">Q2 2025: AI Enhancement Wave</h4>
                </div>
                <div className="text-sm text-gray-700 space-y-2">
                  <p className="font-semibold text-green-600">Upgrade existing systems with advanced AI</p>
                  <ul className="text-xs space-y-1 ml-4">
                    <li>• Computer vision for equipment inspection (photo → auto-report)</li>
                    <li>• Predictive maintenance alerts in RAG (analyze patterns)</li>
                    <li>• Voice-to-text everywhere (hands-free field use)</li>
                    <li>• Anomaly detection in BlobCheck (auto-flag unusual patterns)</li>
                  </ul>
                  <div className="bg-green-50 p-2 rounded mt-2">
                    <p className="text-xs"><strong>Projected Impact:</strong> 30% faster troubleshooting, 25% reduction in equipment downtime</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-lg border-t-4 border-purple-500">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <BarChart3 size={24} className="text-purple-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">Q3 2025: Analytics Platform</h4>
                </div>
                <div className="text-sm text-gray-700 space-y-2">
                  <p className="font-semibold text-purple-600">Unified analytics across all systems</p>
                  <ul className="text-xs space-y-1 ml-4">
                    <li>• Real-time KPI dashboard (response times, usage, ROI)</li>
                    <li>• Technician performance metrics and leaderboards</li>
                    <li>• Predictive analytics for parts inventory</li>
                    <li>• Customer satisfaction trending and alerts</li>
                  </ul>
                  <div className="bg-purple-50 p-2 rounded mt-2">
                    <p className="text-xs"><strong>Projected Impact:</strong> Data-driven decision making, 15% improvement in resource allocation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl shadow-lg border-t-4 border-orange-500">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <GitBranch size={24} className="text-orange-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">Q4 2025: System Integration</h4>
                </div>
                <div className="text-sm text-gray-700 space-y-2">
                  <p className="font-semibold text-orange-600">Connect systems for seamless workflow</p>
                  <ul className="text-xs space-y-1 ml-4">
                    <li>• DykScribe Q&As auto-index into RAG for instant searchability</li>
                    <li>• BlobCheck alerts push to Mobile App notifications</li>
                    <li>• CDMS triggers RAG updates when new manuals uploaded</li>
                    <li>• Single sign-on (SSO) across all platforms</li>
                    <li>• Unified API layer for third-party integrations</li>
                  </ul>
                  <div className="bg-orange-50 p-2 rounded mt-2">
                    <p className="text-xs"><strong>Projected Impact:</strong> Seamless user experience, 40% reduction in context switching</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-lg border-t-4 border-red-500">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Users size={24} className="text-red-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">2026: Customer Portal</h4>
                </div>
                <div className="text-sm text-gray-700 space-y-2">
                  <p className="font-semibold text-red-600">External-facing platform for customers</p>
                  <ul className="text-xs space-y-1 ml-4">
                    <li>• Real-time equipment status and service history</li>
                    <li>• Self-service ticket creation and tracking</li>
                    <li>• Direct access to equipment manuals via RAG</li>
                    <li>• Calendly-style service scheduling</li>
                    <li>• Automated email notifications and updates</li>
                  </ul>
                  <div className="bg-red-50 p-2 rounded mt-2">
                    <p className="text-xs"><strong>Projected Impact:</strong> Improved customer satisfaction, 30% reduction in support calls</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-5 rounded-xl shadow-lg">
                <h4 className="font-bold mb-3 text-xl">Cumulative Phase 2 Value</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Current systems (Year 1)</span>
                    <span className="text-xl font-bold">$138K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Mobile App launch</span>
                    <span className="text-xl font-bold">+$40K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">AI enhancements</span>
                    <span className="text-xl font-bold">+$15K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Analytics & integration</span>
                    <span className="text-xl font-bold">+$12K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Customer portal</span>
                    <span className="text-xl font-bold">+$18K</span>
                  </div>
                  <div className="border-t-2 border-white/30 pt-2 mt-2 flex justify-between items-center">
                    <span className="text-lg font-bold">Year 2-3 Total</span>
                    <span className="text-3xl font-bold">$223K</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-5 rounded-xl border-2 border-blue-300">
            <h4 className="font-bold mb-3 text-gray-800">Risk Mitigation Strategy</h4>
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div className="bg-white p-3 rounded-lg shadow">
                <p className="font-semibold text-blue-600 mb-1">Technical Risks</p>
                <p className="text-gray-600">Modular architecture allows replacing components without system rewrites. AI model fallbacks if primary fails.</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow">
                <p className="font-semibold text-green-600 mb-1">Adoption Risks</p>
                <p className="text-gray-600">Phased rollouts with champions. Training programs. Ongoing support. 92% adoption proves approach works.</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow">
                <p className="font-semibold text-purple-600 mb-1">Maintenance Risks</p>
                <p className="text-gray-600">Comprehensive documentation. Clean code standards. Monitoring and alerting. Knowledge transfer protocols.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Strategic Importance
    {
      type: 'content',
      title: 'Strategic Importance: Why VDRS Must Invest in Digital Transformation',
      icon: Target,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold mb-2">The Innovation Imperative</h3>
            <p className="text-xl opacity-90">Digital transformation is not optional - it is survival</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-red-600">Without These Solutions: The Risk</h4>
              <div className="space-y-3">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <p className="font-bold text-sm mb-2 text-red-800">Immediate Losses</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• $150K+ annual productivity drain continues</li>
                    <li>• Knowledge evaporates as senior techs retire (5 retiring in next 2 years)</li>
                    <li>• Manual processes prevent scaling beyond current capacity</li>
                    <li>• Error rates remain high (15% → customer dissatisfaction)</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                  <p className="font-bold text-sm mb-2 text-orange-800">Competitive Disadvantage</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• Competitors adopting AI get 2-3x efficiency advantage</li>
                    <li>• Slower response times lose customers to faster competitors</li>
                    <li>• Inability to attract top engineering talent (outdated tech)</li>
                    <li>• Market positioning as "traditional" vs "innovative"</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                  <p className="font-bold text-sm mb-2 text-yellow-800">Strategic Risks</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• Cannot scale operations to meet growth targets (constrained by manual processes)</li>
                    <li>• Compliance becomes harder as regulations tighten</li>
                    <li>• Technical debt accumulates in legacy systems</li>
                    <li>• Innovation gap widens year over year</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-500 to-orange-600 text-white p-5 rounded-xl shadow-lg">
                <p className="text-2xl font-bold mb-2">3-Year Cost of Inaction</p>
                <p className="text-5xl font-bold mb-2">$450K+</p>
                <p className="text-sm opacity-90">Lost productivity + missed growth opportunities + competitive erosion</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-4 text-green-600">With These Solutions: The Opportunity</h4>
                <div className="space-y-3">
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <p className="font-bold text-sm mb-2 text-green-800">Immediate Gains (Proven)</p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• $138K annual value created in first 4 months (documented)</li>
                      <li>• 320+ hours saved monthly = capacity for 30% more work</li>
                      <li>• 85% error reduction improves customer satisfaction</li>
                      <li>• Knowledge preserved forever in searchable systems</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="font-bold text-sm mb-2 text-blue-800">Competitive Advantages</p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• AI capabilities create proprietary moat (hard to copy)</li>
                      <li>• Response times 10x faster than competitors</li>
                      <li>• Modern tech attracts top talent (retention + recruitment)</li>
                      <li>• Market positioning as innovation leader</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                    <p className="font-bold text-sm mb-2 text-purple-800">Strategic Enablers</p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Operations ready to scale 3x without proportional headcount</li>
                      <li>• Compliance automated (audit prep 40 hrs → 2 hrs)</li>
                      <li>• Technical foundation for future innovation</li>
                      <li>• Data infrastructure enables advanced analytics</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-5 rounded-xl shadow-lg">
                <p className="text-2xl font-bold mb-2">3-Year Value Creation</p>
                <p className="text-5xl font-bold mb-2">$526K+</p>
                <p className="text-sm opacity-90">Documented savings + growth enablement + competitive positioning</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-xl shadow-xl">
            <h4 className="text-2xl font-bold mb-4 text-center">The Decision Framework</h4>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-red-900/50 p-5 rounded-lg border-2 border-red-500">
                <p className="text-xl font-bold mb-3 text-red-400">Status Quo Path</p>
                <ul className="space-y-2 text-sm">
                  <li>• $150K annual losses continue</li>
                  <li>• Competition gains 2-3x efficiency edge</li>
                  <li>• Cannot scale to meet growth targets</li>
                  <li>• Senior knowledge lost permanently</li>
                </ul>
                <p className="text-2xl font-bold mt-4 text-red-400">= Decline</p>
              </div>
              <div className="bg-green-900/50 p-5 rounded-lg border-2 border-green-500">
                <p className="text-xl font-bold mb-3 text-green-400">Innovation Path</p>
                <ul className="space-y-2 text-sm">
                  <li>• $138K annual value (proven + growing)</li>
                  <li>• Market leadership in AI-powered services</li>
                  <li>• Operations ready for 3x growth</li>
                  <li>• Institutional knowledge preserved & accessible</li>
                </ul>
                <p className="text-2xl font-bold mt-4 text-green-400">= Growth</p>
              </div>
            </div>
            <p className="text-center mt-6 text-xl font-bold">
              The real question: Can VDRS afford NOT to invest in digital transformation?
            </p>
          </div>
        </div>
      )
    },

    // Key Learnings
    {
      type: 'content',
      title: 'Professional Development: Manufacturing Engineer to Tech Innovator',
      icon: Award,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold mb-2">Career Evolution: The Journey</h3>
            <p className="text-lg opacity-90">From managing factory floors to building intelligent software systems</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl shadow-lg">
              <h4 className="font-bold text-lg mb-3 text-blue-600">Manufacturing Foundation</h4>
              <p className="text-xs text-gray-600 mb-3">Hero MotoCorp (2022-2024)</p>
              <div className="space-y-2 text-xs">
                <div className="bg-blue-50 p-2 rounded">
                  <p className="font-semibold text-blue-800">Operational Excellence</p>
                  <p className="text-gray-600">Managed 25 workers, reduced downtime 83%, saved ₹9M annually</p>
                </div>
                <div className="bg-green-50 p-2 rounded">
                  <p className="font-semibold text-green-800">TPM & Lean Expertise</p>
                  <p className="text-gray-600">TPM Special Award, 15+ Kaizen projects, data-driven problem solving</p>
                </div>
                <div className="bg-purple-50 p-2 rounded">
                  <p className="font-semibold text-purple-800">Automation Experience</p>
                  <p className="text-gray-600">PLC programming, CNC/robotics, Smart Plant digitization</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-lg">
              <h4 className="font-bold text-lg mb-3 text-purple-600">Technical Skill Building</h4>
              <p className="text-xs text-gray-600 mb-3">Northeastern University (2024-2026)</p>
              <div className="space-y-2 text-xs">
                <div className="bg-purple-50 p-2 rounded">
                  <p className="font-semibold text-purple-800">AI/ML Mastery</p>
                  <p className="text-gray-600">6 different models deployed, RAG architecture, LLM fine-tuning</p>
                </div>
                <div className="bg-blue-50 p-2 rounded">
                  <p className="font-semibold text-blue-800">Full-Stack Development</p>
                  <p className="text-gray-600">React, Node.js, Python Flask, SQL Server, Azure cloud</p>
                </div>
                <div className="bg-green-50 p-2 rounded">
                  <p className="font-semibold text-green-800">Modern Frameworks</p>
                  <p className="text-gray-600">Streamlit, React Native, SocketIO, Vector DBs, REST APIs</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-lg">
              <h4 className="font-bold text-lg mb-3 text-green-600">VDRS Impact</h4>
              <p className="text-xs text-gray-600 mb-3">Internship (Aug 2024 - Present)</p>
              <div className="space-y-2 text-xs">
                <div className="bg-green-50 p-2 rounded">
                  <p className="font-semibold text-green-800">Business Value Creation</p>
                  <p className="text-gray-600">$138K annual value, 813% average ROI, 7 systems deployed</p>
                </div>
                <div className="bg-blue-50 p-2 rounded">
                  <p className="font-semibold text-blue-800">Technical Leadership</p>
                  <p className="text-gray-600">Architected solutions, made build vs buy decisions, mentored junior devs</p>
                </div>
                <div className="bg-purple-50 p-2 rounded">
                  <p className="font-semibold text-purple-800">Product Ownership</p>
                  <p className="text-gray-600">End-to-end ownership: requirements → development → deployment → support</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-xl font-bold mb-4 text-gray-800">Core Competencies Developed</h4>
            <div className="grid grid-cols-4 gap-4">
              <div className="space-y-2">
                <p className="font-semibold text-sm text-blue-600">AI/ML Engineering</p>
                <div className="text-xs text-gray-600 space-y-1">
                  <li>LLM integration</li>
                  <li>RAG architecture</li>
                  <li>Vector databases</li>
                  <li>Prompt engineering</li>
                  <li>Model selection</li>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-sm text-green-600">Software Engineering</p>
                <div className="text-xs text-gray-600 space-y-1">
                  <li>Full-stack development</li>
                  <li>Cloud architecture</li>
                  <li>API design</li>
                  <li>Database optimization</li>
                  <li>DevOps practices</li>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-sm text-purple-600">Project Management</p>
                <div className="text-xs text-gray-600 space-y-1">
                  <li>Agile methodology</li>
                  <li>Stakeholder management</li>
                  <li>ROI calculation</li>
                  <li>Risk mitigation</li>
                  <li>Change management</li>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-sm text-orange-600">Manufacturing Ops</p>
                <div className="text-xs text-gray-600 space-y-1">
                  <li>TPM principles</li>
                  <li>Kaizen methodology</li>
                  <li>Lean thinking</li>
                  <li>Process optimization</li>
                  <li>Data-driven decisions</li>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-2 border-blue-300">
            <h4 className="font-bold text-xl mb-4 text-gray-800">Career Trajectory: What is Next</h4>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-sm mb-3 text-blue-600">Immediate Goals (2025-2026)</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Complete MS in Advanced & Intelligent Manufacturing (May 2026)</li>
                  <li>• Deploy remaining VDRS systems (Mobile App, Phase 2 enhancements)</li>
                  <li>• Publish case studies on AI in manufacturing operations</li>
                  <li>• Build portfolio showcasing technical + business impact</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-sm mb-3 text-green-600">Long-Term Vision (2026+)</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• <strong>Manufacturing Engineering Leadership roles</strong> bridging operations and technology</li>
                  <li>• Drive digital transformation in manufacturing/industrial settings</li>
                  <li>• Build intelligent factory systems combining IoT, AI, and lean principles</li>
                  <li>• Leverage unique background: mechatronics + manufacturing ops + modern AI</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-5 rounded-xl">
            <p className="text-lg font-bold mb-2 text-center">Unique Value Proposition</p>
            <p className="text-sm text-center italic opacity-90">
              "Few engineers have deep manufacturing floor experience AND modern AI/software capabilities. This intersection - understanding both operational excellence and cutting-edge technology - enables me to build solutions that actually work in real industrial environments, not just in theory."
            </p>
          </div>
        </div>
      )
    },

    // Final Summary
    {
      type: 'content',
      title: 'Portfolio Summary: Measurable Business Transformation',
      icon: TrendingUp,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-4xl font-bold mb-3">From $150K Problem to $138K Solution</h3>
            <p className="text-2xl opacity-90">4 months • 7 systems • Transformative results</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-2xl font-bold mb-4 text-gray-800">By The Numbers</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="text-green-600" size={24} />
                    <span className="font-semibold text-gray-800">Annual Value Created</span>
                  </div>
                  <span className="text-2xl font-bold text-green-600">$138K</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Clock className="text-blue-600" size={24} />
                    <span className="font-semibold text-gray-800">Hours Saved Monthly</span>
                  </div>
                  <span className="text-2xl font-bold text-blue-600">320+</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Target className="text-purple-600" size={24} />
                    <span className="font-semibold text-gray-800">Error Reduction</span>
                  </div>
                  <span className="text-2xl font-bold text-purple-600">85%</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="text-orange-600" size={24} />
                    <span className="font-semibold text-gray-800">Average ROI</span>
                  </div>
                  <span className="text-2xl font-bold text-orange-600">813%</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Users className="text-red-600" size={24} />
                    <span className="font-semibold text-gray-800">Users Impacted</span>
                  </div>
                  <span className="text-2xl font-bold text-red-600">50+</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold mb-4">System Deployment Status</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Production Systems</span>
                    <span className="font-bold text-2xl">5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>In Development</span>
                    <span className="font-bold text-2xl">2</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>User Adoption Rate</span>
                    <span className="font-bold text-2xl">92%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>System Uptime</span>
                    <span className="font-bold text-2xl">99.5%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-lg">
                <h4 className="font-bold mb-3 text-gray-800">Technical Achievements</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-blue-50 p-2 rounded text-center">
                    <p className="font-bold text-blue-600">6</p>
                    <p className="text-gray-600">AI Models</p>
                  </div>
                  <div className="bg-green-50 p-2 rounded text-center">
                    <p className="font-bold text-green-600">3</p>
                    <p className="text-gray-600">Tech Stacks</p>
                  </div>
                  <div className="bg-purple-50 p-2 rounded text-center">
                    <p className="font-bold text-purple-600">4</p>
                    <p className="text-gray-600">Cloud Services</p>
                  </div>
                  <div className="bg-orange-50 p-2 rounded text-center">
                    <p className="font-bold text-orange-600">10K+</p>
                    <p className="text-gray-600">Lines of Code</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border-2 border-green-300">
                <p className="font-bold text-sm mb-2 text-gray-800">ROI by System</p>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between"><span>DykScribe</span><span className="font-bold text-green-600">900%</span></div>
                  <div className="flex justify-between"><span>Data Extractor</span><span className="font-bold text-green-600">884%</span></div>
                  <div className="flex justify-between"><span>RAG System</span><span className="font-bold text-green-600">770%</span></div>
                  <div className="flex justify-between"><span>BlobCheck</span><span className="font-bold text-green-600">733%</span></div>
                  <div className="flex justify-between"><span>GDrive</span><span className="font-bold text-green-600">550%</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-xl font-bold mb-4 text-gray-800">Key Success Principles Applied</h4>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-bold text-blue-800 mb-2">1. User-Centric Design</p>
                <p className="text-xs text-gray-700">Every system co-created with end users. Weekly feedback loops. 92% adoption proves approach works.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-800 mb-2">2. ROI-Driven Features</p>
                <p className="text-xs text-gray-700">Every feature justified by business value. Calculated time savings and cost reductions before building.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-bold text-purple-800 mb-2">3. Rapid Iteration</p>
                <p className="text-xs text-gray-700">Ship MVP fast, enhance based on usage. Better to have working system today than perfect system never.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-xl">
            <blockquote className="text-center">
              <p className="text-2xl font-bold mb-3">
                "Building solutions is not about technology - it is about understanding operational problems deeply and applying the right tools to solve them."
              </p>
              <p className="text-sm opacity-75">
                This portfolio proves that combining manufacturing operational excellence with modern AI creates measurable business transformation. The results speak for themselves: $138K annual value in 4 months.
              </p>
            </blockquote>
          </div>
        </div>
      )
    },

    // Q&A
    {
      type: 'title',
      content: (
        <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white p-12">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mb-6 animate-pulse">
              <Target size={64} className="text-white" />
            </div>
          </div>
          <h2 className="text-6xl font-bold mb-8">Questions?</h2>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl max-w-2xl mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Contact Information</h3>
            <div className="space-y-3 text-lg">
              <p className="text-center"><strong className="text-blue-300">Ajith Srikanth</strong></p>
              <p className="text-center text-gray-300">MS Advanced & Intelligent Manufacturing</p>
              <p className="text-center text-gray-300">Northeastern University</p>
              <div className="border-t border-white/20 my-4"></div>
              <p className="text-center text-gray-300">ajithsrikanth.f@northeastern.edu</p>
              <p className="text-center text-gray-300">(857) 339-9017</p>
              <p className="text-center text-gray-300">linkedin.com/in/as31</p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 text-center max-w-4xl">
            <div>
              <p className="text-4xl font-bold text-green-400 mb-2">$153K</p>
              <p className="text-sm text-gray-300">Annual Value Created</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-400 mb-2">819%</p>
              <p className="text-sm text-gray-300">Average ROI</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-400 mb-2">10</p>
              <p className="text-sm text-gray-300">Systems Deployed</p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full">
            <p className="text-xl font-semibold">
              Thank you for your time
            </p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const currentSlideData = slides[currentSlide];
  const IconComponent = currentSlideData.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col">
      <div className="flex-1 bg-white shadow-2xl m-4 rounded-2xl overflow-hidden">
        {currentSlideData.type === 'title' ? (
          currentSlideData.content
        ) : (
          <div className="h-full flex flex-col">
            <div className="bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 text-white px-8 py-6">
              <div className="flex items-center space-x-4">
                {IconComponent && (
                  <div className="bg-white/20 p-3 rounded-lg">
                    <IconComponent size={32} />
                  </div>
                )}
                <h2 className="text-3xl font-bold">{currentSlideData.title}</h2>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-8 bg-gradient-to-br from-gray-50 to-white">
              {currentSlideData.content}
            </div>
          </div>
        )}
      </div>

      <div className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white px-8 py-5 flex items-center justify-between shadow-2xl">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed hover:from-blue-500 hover:to-blue-600 transition-all shadow-lg transform hover:scale-105 disabled:hover:scale-100"
        >
          <ChevronLeft size={20} />
          <span className="font-semibold">Previous</span>
        </button>

        <div className="text-center">
          <p className="text-sm mb-2 text-gray-300">
            Slide {currentSlide + 1} of {slides.length}
          </p>
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500' 
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed hover:from-blue-500 hover:to-blue-600 transition-all shadow-lg transform hover:scale-105 disabled:hover:scale-100"
        >
          <span className="font-semibold">Next</span>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Presentation;