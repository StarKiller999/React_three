export const useSortedPosts = (props, sort) => {
    const sortedPosts = useMemo(( ) =>{
        console.log('Функция вызвалась')
        if (sort) {
          return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
      
      }, [sort, posts]);

      return sortedPosts;
}
export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort); 
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.includes(query))
          }, [query, sortedPosts])
          return sortedAndSearchedPosts;
}