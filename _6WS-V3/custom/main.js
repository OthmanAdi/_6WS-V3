var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
// var $closeBtnsArr = [].slice.call(document.querySelectorAll('.content-wrapper'));
var $closeBtnsDiv = [].slice.call(document.querySelectorAll('.el__content'));
setTimeout(function () {
    $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function ($el) {
    $el.addEventListener('click', function () {
        if (this.classList.contains('s--active')) return;
        $cont.classList.add('s--el-active');
        this.classList.add('s--active');
    });
});

$closeBtnsDiv.forEach(function ($body) {
    $body.addEventListener('click', function (e) {
        e.stopPropagation();
        $cont.classList.remove('s--el-active');
        document.querySelector('.el.s--active').classList.remove('s--active');
    });
});

//
//
//The following Javascript works on Week Section for Mobile View
//
//
$(document).on('click', function (e) {
    /* bootstrap collapse js adds "in" class to your collapsible element*/
    var WeekToggleOpen = $('#wocheColl1').hasClass('in');

    if (!$(e.target).closest('#wocheColl1').length && !$(e.target).is('#wocheColl1') && WeekToggleOpen === true) {
        $('#wocheColl1').collapse('toggle');
    }
});
$(document).on('click', function (e) {
    /* bootstrap collapse js adds "in" class to your collapsible element*/
    var WeekToggleOpen = $('#wocheColl2').hasClass('in');

    if (!$(e.target).closest('#wocheColl2').length && !$(e.target).is('#wocheColl1') && WeekToggleOpen === true) {
        $('#wocheColl2').collapse('toggle');
    }
});
$(document).on('click', function (e) {
    /* bootstrap collapse js adds "in" class to your collapsible element*/
    var WeekToggleOpen = $('#wocheColl3').hasClass('in');

    if (!$(e.target).closest('#wocheColl3').length && !$(e.target).is('#wocheColl1') && WeekToggleOpen === true) {
        $('#wocheColl3').collapse('toggle');
    }
});
$(document).on('click', function (e) {
    /* bootstrap collapse js adds "in" class to your collapsible element*/
    var WeekToggleOpen = $('#wocheColl4').hasClass('in');

    if (!$(e.target).closest('#wocheColl4').length && !$(e.target).is('#wocheColl1') && WeekToggleOpen === true) {
        $('#wocheColl4').collapse('toggle');
    }
});
$(document).on('click', function (e) {
    /* bootstrap collapse js adds "in" class to your collapsible element*/
    var WeekToggleOpen = $('#wocheColl5').hasClass('in');

    if (!$(e.target).closest('#wocheColl5').length && !$(e.target).is('#wocheColl1') && WeekToggleOpen === true) {
        $('#wocheColl5').collapse('toggle');
    }
});
$(document).on('click', function (e) {
    /* bootstrap collapse js adds "in" class to your collapsible element*/
    var WeekToggleOpen = $('#wocheColl6').hasClass('in');

    if (!$(e.target).closest('#wocheColl6').length && !$(e.target).is('#wocheColl1') && WeekToggleOpen === true) {
        $('#wocheColl6').collapse('toggle');
    }
});

const animateTarget = document.querySelector("#animate-me");
const animateTarget1 = document.querySelector("#animate-me1");
const effectButtons = document.querySelectorAll("[data-test]");

effectButtons.forEach(button => {
    button.addEventListener('click', e => {
        const button = e.target;
        const effect = button.dataset.test;
        animateTarget.classList.remove(...animateTarget.classList);
        animateTarget1.classList.remove(...animateTarget.classList);

        animateTarget.classList.add('magictime', effect);
    });
});
//
// let scale = 1;
// $('.Btn-M').on('click', function () {
//     $('#FadeInScaleIn-M').css('transform', 'scale(' + (scale += 0.25) + ')');
// });
// $('.Btn-R').on('click', function () {
//     $('#FadeInScaleIn-R').css('transform', 'scale(' + (scale += 0.25) + ')');
// });
// $('.Btn-P').on('click', function () {
//     $('#FadeInScaleIn-P').css('transform', 'scale(' + (scale += 0.25) + ')');
// });
// $('.Btn-S').on('click', function () {
//     $('#FadeInScaleIn-S').css('transform', 'scale(' + (scale += 0.25) + ')');
// });
// $('.Btn-MJ').on('click', function () {
//     $('#FadeInScaleIn-MJ').css('transform', 'scale(' + (scale += 0.25) + ')');
// });
// $('.Btn-SC').on('click', function () {
//     $('#FadeInScaleIn-SC').css('transform', 'scale(' + (scale += 0.25) + ')');
// });
// $('.Btn-RA').on('click', function () {
//     $('#FadeInScaleIn-RA').css('transform', 'scale(' + (scale += 0.25) + ')');
// });
// $('.Btn-RP').on('click', function () {
//     $('#FadeInScaleIn-RP').css('transform', 'scale(' + (scale += 0.25) + ')');
// });
// $('.team-wrap-M').on('click', function () {
//     $('#FadeInScaleIn-M').css('transform', 'scale(' + (scale += 0.25) + ')');
// });
// $('.team-wrap-R').on('click', function () {
//     $('#FadeInScaleIn-R').css('transform', 'scale(' + (scale += 0.25) + ')');
// });
// $('.team-wrap-P').on('click', function () {
//     $('#FadeInScaleIn-P').css('transform', 'scale(' + (scale += 0.25) + ')');
// });
// $('.team-wrap-S').on('click', function () {
//     $('#FadeInScaleIn-S').css('transform', 'scale(' + (scale += 0.25) + ')');
// });
// $('.team-wrap-MJ').on('click', function () {
//     $('#FadeInScaleIn-MJ').css('transform', 'scale(' + (scale += 0.25) + ')');
// });
// $('.team-wrap-SC').on('click', function () {
//     $('#FadeInScaleIn-SC').css('transform', 'scale(' + (scale += 0.25) + ')');
// });
// $('.team-wrap-RA').on('click', function () {
//     $('#FadeInScaleIn-RA').css('transform', 'scale(' + (scale += 0.25) + ')');
// });
// $('.team-wrap-RP').on('click', function () {
//     $('#FadeInScaleIn-RP').css('transform', 'scale(' + (scale += 0.25) + ')');
// });
//
//
//
// $('.Btn-close-M').on('click', function () {
//     $('.Remove').css('transform', 'scale(' + (scale -= 0.25) + ')');
// });
// $('.Btn-close-R').on('click', function () {
//     $('.Remove').css('transform', 'scale(' + (scale -= 0.25) + ')');
// });
// $('.Btn-close-P').on('click', function () {
//     $('.Remove').css('transform', 'scale(' + (scale -= 0.25) + ')');
// });
// $('.Btn-close-S').on('click', function () {
//     $('.Remove').css('transform', 'scale(' + (scale -= 0.25) + ')');
// });
// $('.Btn-close-MJ').on('click', function () {
//     $('.Remove').css('transform', 'scale(' + (scale -= 0.25) + ')');
// });
// $('.Btn-close-SC').on('click', function () {
//     $('.Remove').css('transform', 'scale(' + (scale -= 0.25) + ')');
// });
// $('.Btn-close-RA').on('click', function () {
//     $('.Remove').css('transform', 'scale(' + (scale -= 0.25) + ')');
// });
// $('.Btn-close-RP').on('click', function () {
//     $('.Remove').css('transform', 'scale(' + (scale -= 0.25) + ')');
// });
//
// $('.Btn-M').on({
//     'click': function () {
//         $("#FadeInScaleIn-M")
//             .fadeOut(1000, function () {
//                 $('#FadeInScaleIn-M').attr('src', 'img/_team/_BLR/img-maria-kauffmann-BLR.png');
//                 $('.Remove').css('transform', 'scale(' + (scale -= 0.25) + ')');
//             })
//             .fadeIn(0);
//     }
// });
// $('.Btn-close-M').on({
//     'click': function () {
//         $("#FadeInScaleIn-M")
//             .fadeOut(0, function () {
//                 $('#FadeInScaleIn-M').attr('src', 'img/_team/img-maria-kauffmann.png');
//                 $('.Remove').css('transform', 'scale(' + (scale += 0.25) + ')');
//             })
//             .fadeIn(0);
//     }
// });
// $('.Btn-R').on({
//     'click': function () {
//         $("#FadeInScaleIn-R")
//             .fadeOut(1000, function () {
//                 $('#FadeInScaleIn-R').attr('src', 'img/_team/_BLR/img-robert-freitag-BLR.png');
//                 $('.Remove').css('transform', 'scale(' + (scale -= 0.25) + ')');
//             })
//             .fadeIn(0);
//     }
// });
// $('.Btn-close-R').on({
//     'click': function () {
//         $("#FadeInScaleIn-R")
//             .fadeOut(0, function () {
//                 $('#FadeInScaleIn-R').attr('src', 'img/_team/img-robert-freitag.png');
//                 $('.Remove').css('transform', 'scale(' + (scale += 0.25) + ')');
//             })
//             .fadeIn(0);
//     }
// });
// $('.Btn-P').on({
//     'click': function () {
//         $("#FadeInScaleIn-P")
//             .fadeOut(1000, function () {
//                 $('#FadeInScaleIn-P').attr('src', 'img/_team/_BLR/img-patrick-neumann-BLR.png');
//                 $('.Remove').css('transform', 'scale(' + (scale -= 0.25) + ')');
//             })
//             .fadeIn(0);
//     }
// });
// $('.Btn-close-P').on({
//     'click': function () {
//         $("#FadeInScaleIn-P")
//             .fadeOut(0, function () {
//                 $('#FadeInScaleIn-P').attr('src', 'img/_team/img-patrick-neumann.png');
//                 $('.Remove').css('transform', 'scale(' + (scale += 0.25) + ')');
//             })
//             .fadeIn(0);
//     }
// });
// $('.Btn-S').on({
//     'click': function () {
//         $("#FadeInScaleIn-S")
//             .fadeOut(1000, function () {
//                 $('#FadeInScaleIn-S').attr('src', 'img/_team/_BLR/img-sabrina-hager-BLR.png');
//                 $('.Remove').css('transform', 'scale(' + (scale -= 0.25) + ')');
//             })
//             .fadeIn(0);
//     }
// });
// $('.Btn-close-S').on({
//     'click': function () {
//         $("#FadeInScaleIn-S")
//             .fadeOut(0, function () {
//                 $('#FadeInScaleIn-S').attr('src', 'img/_team/img-sabrina-hager.png');
//                 $('.Remove').css('transform', 'scale(' + (scale += 0.25) + ')');
//             })
//             .fadeIn(0);
//     }
// });
// $('.Btn-MJ').on({
//     'click': function () {
//         $("#FadeInScaleIn-MJ")
//             .fadeOut(1000, function () {
//                 $('#FadeInScaleIn-MJ').attr('src', 'img/_team/_BLR/img-marie-gallinge-BLR.png');
//                 $('.Remove').css('transform', 'scale(' + (scale -= 0.25) + ')');
//             })
//             .fadeIn(0);
//     }
// });
// $('.Btn-close-MJ').on({
//     'click': function () {
//         $("#FadeInScaleIn-MJ")
//             .fadeOut(0, function () {
//                 $('#FadeInScaleIn-MJ').attr('src', 'img/_team/img-marie-gallinge.png');
//                 $('.Remove').css('transform', 'scale(' + (scale += 0.25) + ')');
//             })
//             .fadeIn(0);
//     }
// });
// $('.Btn-SC').on({
//     'click': function () {
//         $("#FadeInScaleIn-SC")
//             .fadeOut(1000, function () {
//                 $('#FadeInScaleIn-SC').attr('src', 'img/_team/_BLR/img-schadi-sabri-BLR.png');
//                 $('.Remove').css('transform', 'scale(' + (scale -= 0.25) + ')');
//             })
//             .fadeIn(0);
//     }
// });
// $('.Btn-close-SC').on({
//     'click': function () {
//         $("#FadeInScaleIn-SC")
//             .fadeOut(0, function () {
//                 $('#FadeInScaleIn-SC').attr('src', 'img/_team/img-schadi-sabri.png');
//                 $('.Remove').css('transform', 'scale(' + (scale += 0.25) + ')');
//             })
//             .fadeIn(0);
//     }
// });
// $('.Btn-RA').on({
//     'click': function () {
//         $("#FadeInScaleIn-RA")
//             .fadeOut(1000, function () {
//                 $('#FadeInScaleIn-RA').attr('src', 'img/_team/_BLR/img-rana-abdelal-BLR.png');
//                 $('.Remove').css('transform', 'scale(' + (scale -= 0.25) + ')');
//             })
//             .fadeIn(0);
//     }
// });
// $('.Btn-close-RA').on({
//     'click': function () {
//         $("#FadeInScaleIn-RA")
//             .fadeOut(0, function () {
//                 $('#FadeInScaleIn-RA').attr('src', 'img/_team/img-rana-abdelal.png');
//                 $('.Remove').css('transform', 'scale(' + (scale += 0.25) + ')');
//             })
//             .fadeIn(0);
//     }
// });
// $('.Btn-RP').on({
//     'click': function () {
//         $("#FadeInScaleIn-RP")
//             .fadeOut(1000, function () {
//                 $('#FadeInScaleIn-RP').attr('src', 'img/_team/_BLR/img-unknown-BLR.png');
//                 $('.Remove').css('transform', 'scale(' + (scale -= 0.25) + ')');
//             })
//             .fadeIn(0);
//     }
// });
// $('.Btn-close-RP').on({
//     'click': function () {
//         $("#FadeInScaleIn-RP")
//             .fadeOut(0, function () {
//                 $('#FadeInScaleIn-RP').attr('src', 'img/_team/img-unknown.png');
//                 $('.Remove').css('transform', 'scale(' + (scale += 0.25) + ')');
//             })
//             .fadeIn(0);
//     }
// });
// //
// //
// //
// $('.team-wrap-M').on({
//     'click': function () {
//         $("#FadeInScaleIn-M")
//             .fadeOut(1000, function () {
//                 $('#FadeInScaleIn-M').attr('src', 'img/_team/_BLR/img-maria-kauffmann-BLR.png');
//             })
//             .fadeIn(1000);
//     }
// });
// $('.Btn-close-M').on({
//     'click': function () {
//         $("#FadeInScaleIn-M")
//             .fadeOut(0, function () {
//                 $('#FadeInScaleIn-M').attr('src', 'img/_team/img-maria-kauffmann.png');
//             })
//             .fadeIn(1000);
//     }
// });
// $('.team-wrap-R').on({
//     'click': function () {
//         $("#FadeInScaleIn-R")
//             .fadeOut(1000, function () {
//                 $('#FadeInScaleIn-R').attr('src', 'img/_team/_BLR/img-robert-freitag-BLR.png');
//             })
//             .fadeIn(1000);
//     }
// });
// $('.Btn-close-R').on({
//     'click': function () {
//         $("#FadeInScaleIn-R")
//             .fadeOut(0, function () {
//                 $('#FadeInScaleIn-R').attr('src', 'img/_team/img-robert-freitag.png');
//             })
//             .fadeIn(1000);
//     }
// });
// $('.team-wrap-P').on({
//     'click': function () {
//         $("#FadeInScaleIn-P")
//             .fadeOut(1000, function () {
//                 $('#FadeInScaleIn-P').attr('src', 'img/_team/_BLR/img-patrick-neumann-BLR.png');
//             })
//             .fadeIn(1000);
//     }
// });
// $('.Btn-close-P').on({
//     'click': function () {
//         $("#FadeInScaleIn-P")
//             .fadeOut(0, function () {
//                 $('#FadeInScaleIn-P').attr('src', 'img/_team/img-patrick-neumann.png');
//             })
//             .fadeIn(1000);
//     }
// });
// $('.team-wrap-S').on({
//     'click': function () {
//         $("#FadeInScaleIn-S")
//             .fadeOut(1000, function () {
//                 $('#FadeInScaleIn-S').attr('src', 'img/_team/_BLR/img-sabrina-hager-BLR.png');
//             })
//             .fadeIn(1000);
//     }
// });
// $('.Btn-close-S').on({
//     'click': function () {
//         $("#FadeInScaleIn-S")
//             .fadeOut(0, function () {
//                 $('#FadeInScaleIn-S').attr('src', 'img/_team/img-sabrina-hager.png');
//             })
//             .fadeIn(1000);
//     }
// });
// $('.team-wrap-MJ').on({
//     'click': function () {
//         $("#FadeInScaleIn-MJ")
//             .fadeOut(1000, function () {
//                 $('#FadeInScaleIn-MJ').attr('src', 'img/_team/_BLR/img-marie-gallinge-BLR.png');
//             })
//             .fadeIn(1000);
//     }
// });
// $('.Btn-close-MJ').on({
//     'click': function () {
//         $("#FadeInScaleIn-MJ")
//             .fadeOut(0, function () {
//                 $('#FadeInScaleIn-MJ').attr('src', 'img/_team/img-marie-gallinge.png');
//             })
//             .fadeIn(1000);
//     }
// });
// $('.team-wrap-SC').on({
//     'click': function () {
//         $("#FadeInScaleIn-SC")
//             .fadeOut(1000, function () {
//                 $('#FadeInScaleIn-SC').attr('src', 'img/_team/_BLR/img-schadi-sabri-BLR.png');
//             })
//             .fadeIn(1000);
//     }
// });
// $('.Btn-close-SC').on({
//     'click': function () {
//         $("#FadeInScaleIn-SC")
//             .fadeOut(0, function () {
//                 $('#FadeInScaleIn-SC').attr('src', 'img/_team/img-schadi-sabri.png');
//             })
//             .fadeIn(1000);
//     }
// });
// $('.team-wrap-RA').on({
//     'click': function () {
//         $("#FadeInScaleIn-RA")
//             .fadeOut(1000, function () {
//                 $('#FadeInScaleIn-RA').attr('src', 'img/_team/_BLR/img-rana-abdelal-BLR.png');
//             })
//             .fadeIn(1000);
//     }
// });
// $('.Btn-close-RA').on({
//     'click': function () {
//         $("#FadeInScaleIn-RA")
//             .fadeOut(0, function () {
//                 $('#FadeInScaleIn-RA').attr('src', 'img/_team/img-rana-abdelal.png');
//             })
//             .fadeIn(1000);
//     }
// });
// $('.team-wrap-RP').on({
//     'click': function () {
//         $("#FadeInScaleIn-RP")
//             .fadeOut(1000, function () {
//                 $('#FadeInScaleIn-RP').attr('src', 'img/_team/_BLR/img-unknown-BLR.png');
//             })
//             .fadeIn(1000);
//     }
// });
// $('.Btn-close-RP').on({
//     'click': function () {
//         $("#FadeInScaleIn-RP")
//             .fadeOut(0, function () {
//                 $('#FadeInScaleIn-RP').attr('src', 'img/_team/img-unknown.png');
//             })
//             .fadeIn(1000);
//     }
// });
// $('[data-toggle=modal]').on('click', function (e) {
//     var $target = $($(this).data('target'));
//     $target.data('triggered', true);
//     setTimeout(function () {
//         if ($target.data('triggered')) {
//             $target.modal('show').data('triggered', false);
//         }
//         ;
//     }, 1000); // milliseconds
//     return false;
// });


