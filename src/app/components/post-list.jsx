import PostCard from './post-card'

export function PostList ({ posts }) {
  return (
    <>
      {posts.map((post) => {
        const {
          id,
          user,
          content
        } = post

        const {
          user_name: userName,
          avatar_url: avatarUrl
        } = user

        return (
        <PostCard
          key={id}
          userName={userName}
          avatarUrl={avatarUrl}
          content={content}
        />
        )
      })}
    </>
  )
}
