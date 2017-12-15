$(document).ready(function(){

    var surveyQues= [
        'Your mind is always buzzing with unexplored ideas and plans.',
        'Generally speaking, you rely more on your experience than your imagination.',
        'You find it easy to stay relaxed and focused even when there is some pressure.',
        'You rarely do something just out of sheer curiosity.',
        'People can rarely upset you.',
        'It is often difficult for you to relate to other people’s feelings.',
        'In a discussion, truth should be more important than people’s sensitivities.',
        'You rarely get carried away by fantasies and ideas.',
        'You think that everyone’s views should be respected regardless of whether they are supported by facts or not.',
        'You feel more energetic after spending time with a group of people.'
    ]

    function surveyQues(){
        $('questionBlock').append();
        for (var i=0, i < surveyQues[i], i++){
            let question = $(
                <h4><strong>Question 1</strong></h4>
                <fieldset class="form-group">
                    <label for="question01">Your mind is always buzzing with unexplored ideas and plans.</label>
                    <br>
                    <div class="col-md-4">
                        <select class="form-control" id="question01" name="scores[0]">
                            <option>1 (Strongly Disagree)</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5 (Strongly Agree)</option>
                        </select>
                    </div>
                </fieldset>
            );
            $('#questionBlock').append(question)
        };
});