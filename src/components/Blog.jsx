import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Code2, Database, Cloud } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

const Blog = () => {
  const blogPosts = [
    {
      title: 'Building Scalable Microservices with Node.js and Docker',
      excerpt: 'Learn how to design and implement microservices architecture using Node.js, Docker, and Kubernetes for high-performance applications.',
      content: `// Example microservice structure
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date() });
});

// API routes
app.use('/api/users', createProxyMiddleware({
  target: 'http://user-service:3001',
  changeOrigin: true
}));

app.use('/api/orders', createProxyMiddleware({
  target: 'http://order-service:3002',
  changeOrigin: true
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`API Gateway running on port \${PORT}\`);
});`,
      category: 'Backend Development',
      readTime: '8 min read',
      publishDate: '2024-01-15',
      tags: ['Node.js', 'Microservices', 'Docker', 'Kubernetes'],
      views: 1250,
      likes: 89
    },
    {
      title: 'Database Optimization Techniques for High-Traffic Applications',
      excerpt: 'Comprehensive guide to optimizing database performance, including indexing strategies, query optimization, and caching mechanisms.',
      content: `-- Example optimized query with proper indexing
EXPLAIN ANALYZE
SELECT u.id, u.name, o.total_amount, o.created_at
FROM users u
INNER JOIN orders o ON u.id = o.user_id
WHERE u.created_at >= '2024-01-01'
  AND o.status = 'completed'
  AND o.total_amount > 100
ORDER BY o.created_at DESC
LIMIT 20;

-- Indexes for optimal performance
CREATE INDEX idx_users_created_at ON users(created_at);
CREATE INDEX idx_orders_user_status_amount ON orders(user_id, status, total_amount);
CREATE INDEX idx_orders_created_at ON orders(created_at);`,
      category: 'Database',
      readTime: '12 min read',
      publishDate: '2024-01-10',
      tags: ['PostgreSQL', 'Performance', 'Indexing', 'Query Optimization'],
      views: 2100,
      likes: 156
    },
    {
      title: 'Implementing Event-Driven Architecture with Apache Kafka',
      excerpt: 'Step-by-step guide to building event-driven systems using Apache Kafka for real-time data processing and microservices communication.',
      content: `// Kafka producer example
const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'order-service',
  brokers: ['localhost:9092']
});

const producer = kafka.producer();

async function publishOrderEvent(orderData) {
  try {
    await producer.connect();
    
    await producer.send({
      topic: 'order-events',
      messages: [{
        key: orderData.id,
        value: JSON.stringify({
          eventType: 'order.created',
          orderId: orderData.id,
          userId: orderData.userId,
          amount: orderData.amount,
          timestamp: new Date().toISOString()
        })
      }]
    });
    
    console.log('Order event published successfully');
  } catch (error) {
    console.error('Error publishing event:', error);
  } finally {
    await producer.disconnect();
  }
}`,
      category: 'System Design',
      readTime: '15 min read',
      publishDate: '2024-01-05',
      tags: ['Apache Kafka', 'Event-Driven', 'Microservices', 'Real-time'],
      views: 1800,
      likes: 134
    },
    {
      title: 'Cloud-Native Backend Development with AWS Services',
      excerpt: 'Best practices for building cloud-native applications using AWS services like Lambda, RDS, ElastiCache, and API Gateway.',
      content: `# AWS Lambda function for user authentication
import json
import boto3
import jwt
from datetime import datetime, timedelta

def lambda_handler(event, context):
    try:
        # Get user credentials from event
        username = event['username']
        password = event['password']
        
        # Authenticate user (simplified)
        if authenticate_user(username, password):
            # Generate JWT token
            token = jwt.encode({
                'username': username,
                'exp': datetime.utcnow() + timedelta(hours=24)
            }, 'secret_key', algorithm='HS256')
            
            return {
                'statusCode': 200,
                'body': json.dumps({
                    'token': token,
                    'expires_in': 86400
                })
            }
        else:
            return {
                'statusCode': 401,
                'body': json.dumps({'error': 'Invalid credentials'})
            }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }`,
      category: 'Cloud Computing',
      readTime: '10 min read',
      publishDate: '2024-01-01',
      tags: ['AWS', 'Lambda', 'Serverless', 'Cloud-Native'],
      views: 1650,
      likes: 98
    }
  ]

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Backend Development': return <Code2 className="w-5 h-5" />
      case 'Database': return <Database className="w-5 h-5" />
      case 'System Design': return <Cloud className="w-5 h-5" />
      case 'Cloud Computing': return <Cloud className="w-5 h-5" />
      default: return <Code2 className="w-5 h-5" />
    }
  }

  return (
    <section id="blog" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Tech Blog</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sharing insights, tutorials, and best practices in backend development, 
            system architecture, and cloud computing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden group hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900/50"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium flex items-center">
                    {getCategoryIcon(post.category)}
                    <span className="ml-2">{post.category}</span>
                  </span>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.publishDate).toLocaleDateString()}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Code Example:</h4>
                  <div className="bg-gray-900 rounded-lg overflow-hidden">
                    <SyntaxHighlighter
                      language={post.category === 'Database' ? 'sql' : 'javascript'}
                      style={tomorrow}
                      customStyle={{
                        margin: 0,
                        fontSize: '0.875rem',
                        lineHeight: '1.5'
                      }}
                    >
                      {post.content}
                    </SyntaxHighlighter>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                      >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center">
                      <span className="mr-1">👁️</span>
                      {post.views.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <span className="mr-1">❤️</span>
                      {post.likes}
                    </div>
                  </div>

                  <button className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="btn-outline inline-flex items-center"
          >
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
