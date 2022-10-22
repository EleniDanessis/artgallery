import HeadTags from "./Head"

const Header = (props) => {
  const {metaDescription, title, gallery}=props
  return(
    <>
      <HeadTags
        title={title}
        metaDescription={metaDescription}
        gallery={gallery}
      ></HeadTags>
    </>
  )
}

export default Header