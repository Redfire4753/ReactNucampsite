import { Col } from "reactstrap";
import Comment from "./Comment";
import { selectCommentsByCampsiteId } from "./commentsSlice";
import CommentForm from "./CommentForm";
import { useState } from "react";

const CommentsList = ({campsiteId}) => {
    const [comments , setComments] = useState(selectCommentsByCampsiteId(campsiteId));
    
    if (comments && comments.length > 0) {
        return ( 
            <Col md='5'className="m-1">
                <h4>Comments</h4>
                {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
                <CommentForm campsiteId={campsiteId}  comments={comments} setComments={setComments}/>
            </Col>
         );
    }
    return (
        <Col md='5' className="m-1">
            There are no comments for this campsite yet.
        </Col>
    );
};
 
export default CommentsList;