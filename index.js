function postComment() {
  const commenter = document.getElementById("commenterName").value;
  const comment = document.getElementById("commentText").value;
  const commentTemplate = document.getElementById("comment-template").innerHTML;
  const templateFn = _.template(commentTemplate);
  const commentsDiv = document.getElementById("comments");
  const templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
  commentsDiv.innerHTML += templateHTML;
}