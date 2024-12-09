$(document).ready(function () {
    let paragraphWidth = [];
    let paragraph = [];
    let count = 0;
    let paragraphCount = 0;
    let totalWidth = 0;
    let keyCount = 0;
    let wrapperCount = 1;
    let lastChildCount = 0;
    let firstChildCount = 1;
    var $newDiv = $('<div class="paragraph__wrapper">');
    // 画面の幅を取得
    const screenWidth = $(window).width();
    const halfWidth = screenWidth / 2;


    $("p.paragraph").each((i, elem) => {
        paragraph[i] = $(elem);
        paragraphWidth[i] = $(elem).width();
    });
    console.log(paragraphWidth);


    //パラグラフ---------------------------
    $('p.paragraph').each(function () {

        var $this = $(this);
        var thisWidth = $this.outerWidth(true); // 外側のマージンも含めた幅を取得

        // 合計幅が400pxを超える場合
        if (totalWidth + thisWidth > $(window).width() * 0.85) {
            // 新しいdiv要素をbodyに追加
            $('body').append($newDiv);
            // 合計幅をリセット
            totalWidth = 0;
            $newDiv = $('<div class="paragraph__wrapper">');
            paragraphCount++;
        }

        // pタグを新しいdiv要素に追加
        $newDiv.append($this);
        // 合計幅に加算
        totalWidth += thisWidth;

        $(".paragraph__wrapper p:last").addClass('last-child');


    });


    // 最後のdiv要素をbodyに追加（最後のpタグが追加されていない場合）
    if ($newDiv.children().length > 0) {
        $('body').append($newDiv);
    }

    $(".paragraph__wrapper p:first-of-type").addClass('first-child');


    var paragraphWrapper = $('.paragraph__wrapper');
    var paragraphWrapperCount = paragraphWrapper.length;
    console.log('paragraph__wrapperの数は:', paragraphWrapperCount);



    // 画面をタッチしたときの処理
    $(document).on('touchstart', function (e) {
        const touchX = e.originalEvent.touches[0].clientX;
        if (touchX < halfWidth) {
            // 左半分をタッチした場合
            leftAction(e);

        } else {
            // 右半分をタッチした場合
            rightAction(e);
        }
    });

    // キーボードの矢印キーを押したときの処理
    $(document).keydown(function (e) {
        if (e.which === 37) { // 左矢印キー
            leftAction(e);
            // 現在のdivの透明度を0にする
        } else if (e.which === 39) { // 右矢印キー
            rightAction(e);
        }
    });

    // 左半分をタッチまたは左矢印キーを押したときの処理
    function leftAction() {

        //全体演出
        if (0 <= count && count < 29) {
            //PC処理
            count++;

            paragraph[count].css({
                opacity: '1',
            });
        };

        if (count === 4) {
            $('.bg-eye').css({
                'opacity': "0",
            });

        } else if (count === 5) {
            $('.bg-eye').css({
                'opacity': "0.1",
            });
        } else if (count === 8) {
            $('.body').css({
                'background-color': "#000",
            });
            $('.paragraph__wrapper').css({
                'color': "#F9EFE1",
            });
            $('.help__text').css({
                'color': "#F9EFE1",
            });
            $('.line--top').css({
                'background-color': "#F9EFE1",
            });
            $('.line--bottom').css({
                'background-color': "#F9EFE1",
            });
            $('.line--right').css({
                'background-color': "#F9EFE1",
            }); $('.line--left').css({
                'background-color': "#F9EFE1",
            });
            $('.cls-1').css({
                'fill': "#F9EFE1",
            });
            $('.bg-eye').css({
                'opacity': "0",
            });
            $('.st0').css({
                'fill': "#F9EFE1",
            });

        }
        else if (count === 9) {
            $('#paper')[0].play();

            $('.body').css({
                'background-color': "#F9EFE1",
            });
            $('.paragraph__wrapper').css({
                'color': "#0B1632",
            });
            $('.help__text').css({
                'color': "#0B1632",
            });
            $('.line--top').css({
                'background-color': "#0B1632",
            });
            $('.line--bottom').css({
                'background-color': "#0B1632",
            });
            $('.line--right').css({
                'background-color': "#0B1632",
            }); $('.line--left').css({
                'background-color': "#0B1632",
            });
            $('.cls-1').css({
                'fill': "#0B1632",
            });
            $('.bg-eye').css({
                'opacity': "0.1",
            });
            $('.st0').css({
                'fill': "#0B1632",
            });

        }
        else if (count === 11) {
            $('.body').css({
                'animation': "tikatika .3s step-end forwards"
            });
            $('.paragraph__wrapper').css({
                'color': "#F9EFE1",
            });
            $('.help__text').css({
                'color': "#F9EFE1",
            });
            $('.line--top').css({
                'background-color': "#F9EFE1",
            });
            $('.line--bottom').css({
                'background-color': "#F9EFE1",
            });
            $('.line--right').css({
                'background-color': "#F9EFE1",
            }); $('.line--left').css({
                'background-color': "#F9EFE1",
            });
            $('.cls-1').css({
                'fill': "#F9EFE1",
            });
            $('.bg-eye').css({
                'fill': "#F9EFE1",
            });
            $('.st0').css({
                'fill': "#F9EFE1",
            });

        } else if (count === 15) {
            $('.bg-eye').css({
                'opacity': "0",
            });
        } else if (count === 16) {
            $('.bg-eye').css({
                'opacity': "0.1",
            });

        } else if (count === 18) {
            $('#clock')[0].play();
        } else if (count === 25) {
            $('#bgm')[0].play();
        };


        // クラス名"last-child"を持つ要素を取得

        const lastChild = document.querySelector('.last-child');
        const lastChildAll = document.querySelectorAll('.last-child');
        const lastChildLenfth = lastChildAll.length;

        if (lastChild.style.opacity === '1') {
            console.log("lastchildがopacity1になりました");
            lastChildCount++;

            console.log(lastChildCount);
            console.log(wrapperCount);

            lastChildAll.forEach((block, index) => {

                //処理
                if (index === lastChildCount) {
                    console.log("wrapperCountとlastChildCountが同じ");
                    $(".paragraph__wrapper").css({ 'opacity': '0' });//
                    $(".paragraph__wrapper").next().css({ 'opacity': '1' });//次のdivのopacityを1にする
                    // 全ての.paragraph__wrapper要素に対して処理を行う
                }

            });

        }


    }

    // 右半分をタッチまたは右矢印キーを押したときの処理
    function rightAction() {


        // ここに右半分の処理を記述
        if (0 < count && count <= 29) {
            count--;

            paragraph[count + 1].css({
                opacity: '0',
            });

        };

        if (count < 4) {
            $('.bg-eye').css({
                'opacity': "0.1",
            });
        } else if (count < 5) {
            $('.bg-eye').css({
                'opacity': "0",
            });
        } else if (count < 8) {
            $('.body').css({
                'background-color': "#F9EFE1",
            });
            $('.paragraph__wrapper').css({
                'color': "#0B1632",
            });
            $('.help__text').css({
                'color': "#0B1632",
            });
            $('.line--top').css({
                'background-color': "#0B1632",
            });
            $('.line--bottom').css({
                'background-color': "#0B1632",
            });
            $('.line--right').css({
                'background-color': "#0B1632",
            }); $('.line--left').css({
                'background-color': "#0B1632",
            });
            $('.cls-1').css({
                'fill': "#0B1632",
            });
            $('.bg-eye').css({
                'opacity': "0.1",
            });
            $('.st0').css({
                'fill': "#0B1632",
            });
        }
        else if (count < 9) {
            $('.body').css({
                'background-color': "#000",
            });
            $('.paragraph__wrapper').css({
                'color': "#F9EFE1",
            });
            $('.help__text').css({
                'color': "#F9EFE1",
            });
            $('.line--top').css({
                'background-color': "#F9EFE1",
            });
            $('.line--bottom').css({
                'background-color': "#F9EFE1",
            });
            $('.line--right').css({
                'background-color': "#F9EFE1",
            }); $('.line--left').css({
                'background-color': "#F9EFE1",
            });
            $('.cls-1').css({
                'fill': "#F9EFE1",
            });
            $('.bg-eye').css({
                'opacity': "0",
            });
            $('.st0').css({
                'fill': "#F9EFE1",
            });
        }

        else if (count < 11) {

            $('.body').css({
                'animation': "beige .3s ease"
            });

            $('.paragraph__wrapper').css({
                'color': "#0B1632",
            });
            $('.help__text').css({
                'color': "#0B1632",
            });
            $('.line--top').css({
                'background-color': "#0B1632",
            });
            $('.line--bottom').css({
                'background-color': "#0B1632",
            });
            $('.line--right').css({
                'background-color': "#0B1632",
            }); $('.line--left').css({
                'background-color': "#0B1632",
            });
            $('.cls-1').css({
                'fill': "#0B1632",
            });
            $('.bg-eye').css({
                'fill': "#0B1632",
            });
            $('.st0').css({
                'fill': "#0B1632",
            });

        }

        else if (count < 15) {
            $('.bg-eye').css({
                'opacity': "0.1",
            });

        } else if (count < 16) {
            $('.bg-eye').css({
                'opacity': "0",
            });

        } else if (count < 25) {
            $('#bgm')[0].pause();
            $('#bgm')[0].currentTime = 0;
        }



    }
});
