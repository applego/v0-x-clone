'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Home, Search, Bell, Mail, User, MoreHorizontal, MessageCircle, Repeat2, Heart, Share } from 'lucide-react'

function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <h1 className="text-xl font-bold">Home</h1>
      <Avatar>
        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
    </header>
  )
}

function Sidebar() {
  return (
    <nav className="flex flex-col space-y-4 p-4">
      <Button variant="ghost" className="justify-start"><Home className="mr-2" />Home</Button>
      <Button variant="ghost" className="justify-start"><Search className="mr-2" />Explore</Button>
      <Button variant="ghost" className="justify-start"><Bell className="mr-2" />Notifications</Button>
      <Button variant="ghost" className="justify-start"><Mail className="mr-2" />Messages</Button>
      <Button variant="ghost" className="justify-start"><User className="mr-2" />Profile</Button>
      <Button variant="ghost" className="justify-start"><MoreHorizontal className="mr-2" />More</Button>
      <Button className="w-full">Tweet</Button>
    </nav>
  )
}

function TweetComposer({ onTweet }) {
  const [tweetContent, setTweetContent] = useState('')

  const handleTweet = () => {
    if (tweetContent.trim()) {
      onTweet(tweetContent)
      setTweetContent('')
    }
  }

  return (
    <Card className="p-4 mb-4">
      <div className="flex space-x-4">
        <Avatar>
          <AvatarImage src="/placeholder.svg?height=48&width=48" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="flex-grow">
          <Textarea
            placeholder="What's happening?"
            value={tweetContent}
            onChange={(e) => setTweetContent(e.target.value)}
            className="mb-2"
          />
          <Button onClick={handleTweet}>Tweet</Button>
        </div>
      </div>
    </Card>
  )
}

function Tweet({ content, username, handle }) {
  return (
    <Card className="p-4 mb-4">
      <div className="flex space-x-4">
        <Avatar>
          <AvatarImage src="/placeholder.svg?height=48&width=48" alt={username || 'User'} />
          <AvatarFallback>{username ? username[0].toUpperCase() : 'U'}</AvatarFallback>
        </Avatar>
        <div>
          <div className="flex items-center space-x-2">
            <span className="font-bold">{username || 'Anonymous'}</span>
            <span className="text-gray-500">@{handle || 'anonymous'}</span>
          </div>
          <p className="mt-1">{content}</p>
          <div className="flex justify-between mt-4 text-gray-500">
            <Button variant="ghost" size="sm"><MessageCircle size={18} /></Button>
            <Button variant="ghost" size="sm"><Repeat2 size={18} /></Button>
            <Button variant="ghost" size="sm"><Heart size={18} /></Button>
            <Button variant="ghost" size="sm"><Share size={18} /></Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

export function TwitterCloneComponent() {
  const [tweets, setTweets] = useState([
    { id: 1, content: "Just setting up my Twitter clone!", username: "John Doe", handle: "johndoe" },
    { id: 2, content: "React and Next.js are awesome!", username: "Jane Smith", handle: "janesmith" },
  ])

  const handleNewTweet = (content) => {
    const newTweet = {
      id: tweets.length + 1,
      content,
      username: "Current User",
      handle: "currentuser",
    }
    setTweets([newTweet, ...tweets])
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-1/4 bg-white border-r">
        <Sidebar />
      </aside>
      <main className="flex-grow">
        <Header />
        <div className="max-w-2xl mx-auto p-4">
          <TweetComposer onTweet={handleNewTweet} />
          {tweets.map((tweet) => (
            <Tweet key={tweet.id} {...tweet} />
          ))}
        </div>
      </main>
    </div>
  )
}