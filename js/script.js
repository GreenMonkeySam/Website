$(window).scroll(function ()
{
    var scroll = $(window).scrollTop();
    var nebula = document.querySelector('.nebula');

    if(scroll < 0)
    {
        scroll = 0;
    }

    nebula.style.backgroundPosition = "50% " + scroll + "%";
});

$( window ).resize(function() {
  adjustPortfolioSize();
});

function loadPortfolioPage()
{
    adjustPortfolioSize();
    scrollToProject();
}

function adjustPortfolioSize()
{
    var frame = document.querySelector('#projectToDisplay');
    var box = document.querySelector('#buttonGrid');
    var boxWidth = box.offsetWidth;
    var boxLeft = box.offsetLeft;
    var diff = boxLeft - frame.offsetLeft;

    frame.style.left = diff + "px";
    frame.style.width = boxWidth + "px";
}

function scrollToProject()
{
    document.querySelector('#autoScrollToHere').scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
}


function showContent(content)
{   
    var shownContent = "portfolio/" + content + ".html";
    var frame = document.querySelector('#projectToDisplay');

    frame.src = shownContent;

    scrollToProject();
}

function scrollToTop()
{
    window.scrollTo(
    {
        top: 0,
        behavior: "smooth"
    });
}

function goToResume()
{
      window.location = 'resume.html';
}

function goToUXPortfolio()
{
      window.location = 'uxDesign.html';
}