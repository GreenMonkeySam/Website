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
  adjustProfilePictureSize();
});

function loadPortfolioPage()
{
    adjustPortfolioSize();
    scrollToProject();
}

function adjustProfilePictureSize()
{
    var button = document.querySelector('mainPageLink');
    var profile = document.querySelector('profile');
    profile.style.width = button.style.width + "px";
}

function adjustPortfolioSize()
{
    var frame = document.querySelector('#projectToDisplay');
    var box = document.querySelector('#buttonGrid');
    var boxWidth = box.offsetWidth;

    frame.style.left = "-15px";
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

function goTo(link, location)
{
    window.open(link, location);
}