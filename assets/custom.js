const clockWithQuestions = document.querySelector('#content1'); //block with questions
const btn = document.querySelector('#p_modal_button3'); //trigger button
const newComments = document.getElementById("new-comments")
let arrAnsvers = [];

//push ansver to array - arrAnsver
clockWithQuestions.addEventListener('click', (e) => {
    let ansver = e.target.outerText;
    arrAnsvers.push(ansver)
});

//output ansver in console
btn.addEventListener('click', (event) => {
    event.preventDefault()
    arrAnsvers.forEach(item => {
        console.log(item + '\n');
    })
});

/*
**   Comments
*/
const submitBtn = document.getElementById("btnSendComments");   //button that selling and write comments
const comment0 = document.getElementById("comment0");           //last comment in DOM document
const commentFace = document.querySelector(".comments_face");   //wrap element for comments

let commentsArr = [];

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('comments')) commentsArr = JSON.parse(localStorage.getItem('comments'));
    showComments();
})

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let commentsText = document.getElementById("commentTextarea");
    let comment = {
        comment: commentsText.value,
        time: Date.now()/1000/60
    }
    commentsText.value = '';
    commentsArr.push(comment);
    localStorage.setItem('comments', JSON.stringify(commentsArr));
    showComments();
    console.log(commentsArr);
    let element = document?.querySelector('new-comments-block');
    if (element) console.log('я существую ');
})

const showComments = () => {
    let out = '';
    commentsArr.forEach((item, index) => {
        out += `<div class="comments" id="comment${index}0" style="display:block">
              <div class="profile">
                <img src="assets/avatar-anonimous.png">
              </div>
              <div class="comment-content">
                <p class="name">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Anonimous</font>
                  </font>
                </p>
                <p>
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">${item.comment}</font>
                  </font>
                </p>
              </div>
              <div class="clr"></div>
              <div class="comment-status">
                <span>
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Curte·comente</font>
                  </font>
                  <img src="assets/like.png" width="15px" height="15px">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">29</font>
                  </font>
                </span>
                <font style="vertical-align: inherit;">
                  <small>
                    <font style="vertical-align: inherit;">·</font>
                  </small>
                  <small>
                    <u>
                      <font style="vertical-align: inherit;">Now</font>
                    </u>
                  </small>
                </font>
                <small>
                  <font style="vertical-align: inherit;"></font>
                  <u>
                    <font style="vertical-align: inherit;"></font>
                  </u>
                </small>
              </div>
            </div>`
    })
    newComments.innerHTML = out;
}

const currentTime = () => {
    const timeAgo = () => {
        let a = Math.floor(Date.now() / 1000 / 60 - commentsArr[0]?.time);
        if (a == 0) {
            console.log('now')
        } else {
            console.log(a + ' minutos antes')
        }

    }
    setInterval(timeAgo, 2000);
}


document.getElementById("clear-localstorage").addEventListener('click', () => { localStorage.clear(); document.location.reload() });
