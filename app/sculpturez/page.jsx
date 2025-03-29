"use client";
import React, { useState, useEffect } from "react";

export default function SculpturezPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [heading, setHeading] = useState("");
  const [category, setCategory] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [readMoreLink, setReadMoreLink] = useState("");
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);

  // Fetch posts from the API
  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/sculpturez");
      const data = await res.json();
      if (data.success) {
        setPosts(data.data);
      } else {
        console.error("Failed to fetch posts:", data.error);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Fetch posts on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("/api/sculpturez", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageUrl,
          heading,
          category,
          shortDescription,
        }),
      });
      const data = await res.json();

      if (!data.success) {
        setMessage(`Error: ${data.error}`);
        return;
      }

      // Reset form fields and update post list
      setImageUrl("");
      setHeading("");
      setCategory("");
      setShortDescription("");
      setReadMoreLink("");
      setMessage("New Sculpturez post created successfully!");
      fetchPosts();
    } catch (error) {
      setMessage("An error occurred while creating the post.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Create a New Sculpturez Post
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8"
      >
        <div className="mb-4">
          <label htmlFor="imageUrl" className="block text-gray-700 text-sm font-bold mb-2">
            Image URL
          </label>
          <input
            id="imageUrl"
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="heading" className="block text-gray-700 text-sm font-bold mb-2">
            Heading
          </label>
          <input
            id="heading"
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
            Category
          </label>
          <input
            id="category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="shortDescription" className="block text-gray-700 text-sm font-bold mb-2">
            Short Description
          </label>
          <textarea
            id="shortDescription"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="readMoreLink" className="block text-gray-700 text-sm font-bold mb-2">
            Read More Link
          </label>
          <input
            id="readMoreLink"
            type="text"
            value={readMoreLink}
            onChange={(e) => setReadMoreLink(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Post
        </button>
      </form>
      {message && (
        <p className="text-center text-green-500 font-medium mb-6">{message}</p>
      )}

      {/* Display posts in a card format */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={post.imageUrl}
              alt={post.heading}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl text-gray-900 font-bold mb-2">{post.heading}</h2>
              <p className="text-gray-700 mb-2">Category: {post.category}</p>
              <p className="text-gray-700 mb-4">{post.shortDescription}</p>
              <a
                href={post.readMoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 cursor-pointer hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
