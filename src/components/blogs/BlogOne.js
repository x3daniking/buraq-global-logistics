import React from 'react'
import { BlogContainer, BlogContent } from './BlogsStyles'
import blogOne from '../../assets/images/blogOne.jpg'
import BlogForm from './BlogForm'

const BlogOne = () => {
  return (
    <BlogContainer>
      <BlogContent>
        <h2>Effective Solutions for Supply Chain Management</h2>
        <p>Dive into the world of supply chain management and explore effective solutions for overcoming common logistics challenges. From optimizing inventory management to enhancing last-mile delivery, discover strategies to streamline your supply chain operations and meet the ever-evolving demands of the industry.</p>
        <img src={blogOne} alt='blog' />
        <p>Title: “Top Tips for Efficient Trucking Operations: Maximizing Productivity and Minimizing Costs” Description: Discover valuable insights and practical tips to optimize your trucking operations. Learn strategies to enhance productivity, reduce costs, and streamline your logistics processes for improved efficiency and profitability.</p>
        <p>Blog 2: Title: “Road Safety Matters: Essential Guidelines for Trucking and Towing Professionals” Description: Explore crucial road safety guidelines specifically tailored for trucking and towing professionals. Gain valuable insights on defensive driving techniques, preventive maintenance, load securement, and compliance with safety regulations to ensure a safe and incident-free journey.</p>
        <p>Blog 3: Title: “Navigating Logistics Challenges: Effective Solutions for Supply Chain Management” Description: Dive into the world of supply chain management and explore effective solutions for overcoming common logistics challenges. From optimizing inventory management to enhancing last-mile delivery, discover strategies to streamline your supply chain operations and meet the ever-evolving demands of the industry.</p>
        <h2>Leave a Reply</h2>
        <p>Your email address will not be published. Required fields are marked *</p>
        <BlogForm />
      </BlogContent>
    </BlogContainer>
  )
}

export default BlogOne
