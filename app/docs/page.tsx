"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  Copy,
  Database,
  Users,
  ShoppingCart,
  FileText,
  ArrowRight,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const apiEndpoints = [
  {
    category: "Users",
    icon: Users,
    color: "bg-blue-500",
    endpoints: [
      {
        method: "GET",
        path: "/api/users",
        description: "Get all users",
        parameters: [],
        response: {
          type: "array",
          example: [
            {
              id: 1,
              name: "John Doe",
              email: "john@example.com",
              avatar: "https://i.pravatar.cc/150?img=1",
            },
          ],
        },
      },
      {
        method: "GET",
        path: "/api/users/{id}",
        description: "Get user by ID",
        parameters: [{ name: "id", type: "integer", description: "User ID" }],
        response: {
          type: "object",
          example: {
            id: 1,
            name: "John Doe",
            email: "john@example.com",
            avatar: "https://i.pravatar.cc/150?img=1",
          },
        },
      },
      {
        method: "POST",
        path: "/api/users",
        description: "Create new user",
        parameters: [],
        body: { name: "string", email: "string" },
        response: {
          type: "object",
          example: {
            id: 3,
            name: "New User",
            email: "new@example.com",
            created: true,
          },
        },
      },
    ],
  },
  {
    category: "Products",
    icon: ShoppingCart,
    color: "bg-green-500",
    endpoints: [
      {
        method: "GET",
        path: "/api/products",
        description: "Get all products",
        parameters: [],
        response: {
          type: "array",
          example: [
            {
              id: 1,
              name: "Laptop",
              price: 999.99,
              category: "Electronics",
              inStock: true,
            },
          ],
        },
      },
      {
        method: "GET",
        path: "/api/products/{id}",
        description: "Get product by ID",
        parameters: [
          { name: "id", type: "integer", description: "Product ID" },
        ],
        response: {
          type: "object",
          example: {
            id: 1,
            name: "Laptop",
            price: 999.99,
            category: "Electronics",
            inStock: true,
          },
        },
      },
    ],
  },
  {
    category: "Posts",
    icon: FileText,
    color: "bg-purple-500",
    endpoints: [
      {
        method: "GET",
        path: "/api/posts",
        description: "Get all posts",
        parameters: [],
        response: {
          type: "array",
          example: [
            {
              id: 1,
              title: "Hello World",
              content: "This is my first post",
              author: "John Doe",
              createdAt: "2024-01-15",
            },
          ],
        },
      },
    ],
  },
];

const getMethodColor = (method: string) => {
  switch (method) {
    case "GET":
      return "bg-green-500";
    case "POST":
      return "bg-blue-500";
    case "PUT":
      return "bg-yellow-500";
    case "DELETE":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            API Documentation
          </h1>
          <p className="text-slate-300 text-lg mb-8">
            Complete reference for all available mock APIs
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-slate-400">
            <Database className="h-4 w-4" />
            <span>Base URL: https://mockapi-hub.vercel.app</span>
          </div>
        </div>

<div className="mb-12">
  <h2 className="text-3xl font-semibold text-white mb-4 text-left">
    Why Use MockAPI Hub?
  </h2>

  <p className="text-slate-300 text-lg italic text-justify">
    This project solves a common pain point for frontend developers,
    testers, and students — they often need real-looking data and APIs
    to test UI components or simulate app flows. MockAPI Hub provides a
    centralized, easy-to-use platform where anyone can access a variety
    of fake REST APIs across multiple categories, try them live, and
    even create their own custom endpoints without writing backend code.
    It saves time, improves development speed, and reduces dependencies
    on backend teams during early development phases.
  </p>
</div>



        {/* Quick Start */}
        <Card className="bg-slate-800 border-slate-700 mb-12">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Code className="h-5 w-5" />
              <span>Quick Start</span>
            </CardTitle>
            <CardDescription className="text-slate-300">
              Get started with MockAPI Hub in seconds
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="javascript" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-slate-700">
                <TabsTrigger
                  value="javascript"
                  className="text-slate-300 data-[state=active]:text-white"
                >
                  JavaScript
                </TabsTrigger>
                <TabsTrigger
                  value="curl"
                  className="text-slate-300 data-[state=active]:text-white"
                >
                  cURL
                </TabsTrigger>
                <TabsTrigger
                  value="python"
                  className="text-slate-300 data-[state=active]:text-white"
                >
                  Python
                </TabsTrigger>
              </TabsList>

              <TabsContent value="javascript" className="mt-4">
                <div className="bg-slate-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-400">
                      JavaScript (Fetch)
                    </span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() =>
                        navigator.clipboard
                          .writeText(`fetch('https://mockapi-hub.vercel.app/api/users')
  .then(response => response.json())
  .then(data => console.log(data));`)
                      }
                      className="text-slate-400 hover:text-white"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <pre className="text-blue-400 text-sm overflow-auto">
                    {`fetch('https://mockapi-hub.vercel.app/api/users')
  .then(response => response.json())
  .then(data => console.log(data));`}
                  </pre>
                </div>
              </TabsContent>

              <TabsContent value="curl" className="mt-4">
                <div className="bg-slate-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-400">cURL</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() =>
                        navigator.clipboard.writeText(`curl -X GET \\
  -H "Content-Type: application/json" \\
  "https://mockapi-hub.vercel.app/api/users"`)
                      }
                      className="text-slate-400 hover:text-white"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <pre className="text-yellow-400 text-sm overflow-auto">
                    {`curl -X GET \\
  -H "Content-Type: application/json" \\
  "https://mockapi-hub.vercel.app/api/users"`}
                  </pre>
                </div>
              </TabsContent>

              <TabsContent value="python" className="mt-4">
                <div className="bg-slate-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-400">
                      Python (Requests)
                    </span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() =>
                        navigator.clipboard.writeText(`import requests

response = requests.get('https://mockapi-hub.vercel.app/api/users')
data = response.json()
print(data)`)
                      }
                      className="text-slate-400 hover:text-white"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <pre className="text-green-400 text-sm overflow-auto">
                    {`import requests

response = requests.get('https://mockapi-hub.vercel.app/api/users')
data = response.json()
print(data)`}
                  </pre>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* API Endpoints */}
        <div className="space-y-8">
          {apiEndpoints.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.category}
                className="bg-slate-800 border-slate-700"
              >
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <div className={`p-2 rounded-lg ${category.color}`}>
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <span>{category.category} API</span>
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    {category.endpoints.length} endpoints available
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {category.endpoints.map((endpoint, index) => (
                      <div
                        key={index}
                        className="border-l-2 border-slate-600 pl-4"
                      >
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge
                            className={`${getMethodColor(
                              endpoint.method
                            )} text-white text-xs`}
                          >
                            {endpoint.method}
                          </Badge>
                          <code className="text-purple-300 text-sm">
                            https://mockapi-hub.vercel.app{endpoint.path}
                          </code>
                        </div>
                        <p className="text-slate-300 mb-3">
                          {endpoint.description}
                        </p>

                        {endpoint.parameters &&
                          endpoint.parameters.length > 0 && (
                            <div className="mb-3">
                              <h4 className="text-white text-sm font-medium mb-2">
                                Parameters:
                              </h4>
                              <div className="space-y-1">
                                {endpoint.parameters.map(
                                  (param, paramIndex) => (
                                    <div key={paramIndex} className="text-sm">
                                      <code className="text-purple-300">
                                        {param.name}
                                      </code>
                                      <span className="text-slate-400">
                                        {" "}
                                        ({param.type}) - {param.description}
                                      </span>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          )}

                        {endpoint.body && (
                          <div className="mb-3">
                            <h4 className="text-white text-sm font-medium mb-2">
                              Request Body:
                            </h4>
                            <div className="bg-slate-900 rounded p-3">
                              <pre className="text-blue-400 text-sm">
                                {JSON.stringify(endpoint.body, null, 2)}
                              </pre>
                            </div>
                          </div>
                        )}

                        <div>
                          <h4 className="text-white text-sm font-medium mb-2">
                            Response:
                          </h4>
                          <div className="bg-slate-900 rounded p-3">
                            <pre className="text-green-400 text-sm">
                              {JSON.stringify(
                                endpoint.response.example,
                                null,
                                2
                              )}
                            </pre>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Authentication Section */}
        <Card className="bg-slate-800 border-slate-700 mt-12">
          <CardHeader>
            <CardTitle className="text-white">Authentication</CardTitle>
            <CardDescription className="text-slate-300">
              Most endpoints are public, but some require authentication
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-medium mb-2">
                  Public Endpoints
                </h3>
                <p className="text-slate-300 text-sm">
                  All GET endpoints are publicly accessible without
                  authentication.
                </p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">
                  Protected Endpoints
                </h3>
                <p className="text-slate-300 text-sm mb-2">
                  POST, PUT, and DELETE endpoints require a valid JWT token in
                  the Authorization header:
                </p>
                <div className="bg-slate-900 rounded p-3">
                  <pre className="text-blue-400 text-sm">{`Authorization: Bearer your-jwt-token`}</pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rate Limiting */}
        <Card className="bg-slate-800 border-slate-700 mt-8">
          <CardHeader>
            <CardTitle className="text-white">Rate Limiting</CardTitle>
            <CardDescription className="text-slate-300">
              Fair usage limits to ensure service availability
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-medium mb-2">Free Tier</h3>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• 1,000 requests per hour</li>
                  <li>• 10,000 requests per day</li>
                  <li>• No authentication required</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">
                  Registered Users
                </h3>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• 5,000 requests per hour</li>
                  <li>• 50,000 requests per day</li>
                  <li>• Custom API creation</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support */}
        <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-600/30 mt-8">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
            <p className="text-slate-300 mb-6">
              Join our community or reach out for support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-900 hover:bg-slate-100">
                Join Discord
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-purple-400 text-purple-300 hover:bg-purple-900/20 bg-transparent"
              >
                Contact Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
