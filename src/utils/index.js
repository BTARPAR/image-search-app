export const IMAGES = (data) => data.reduce((acc, curr) => {
  curr.images?.map((image) => {
    if (image.type !== 'video/mp4') {
      const lastIndex =  image.link.lastIndexOf('.')
      const thumbnail =  image.link.slice(0, lastIndex)+'t'+image.link.slice(lastIndex)
      acc.push({
        src: image.link,
        title: curr.title,
        thumbnail,
        thumbnailWidth: 500,
        thumbnailHeight: 500,
      })
    }
  })
  return acc
}, [])