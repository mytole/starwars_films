const styles = {
  container: {
    height: 420,
    width: 240,
    backgroundColor: "white",
    borderRadius: 5,
    overflow: "hidden",
    position: "relative",
  },
  img: {
    objectFit: "cover",
    height: "60%",
    width: "100%",
  },
  textWrapper: {
    padding: 8,
  },
  title: {
    marginBottom: 5,
  },
  description: {
    height: 80,
    width: "100%",
    wordWrap: "break-word",
    overflow: "auto",
  },
  likeIcon: {
    fontSize: 28,
    color: "lightgray",
    position: "absolute",
    bottom: 13,
    right: 13,
  },
  liked: {
    color: "red",
  },
};

export default styles;
