document.addEventListener("DOMContentLoaded",function()
{
  document.querySelector(".Square").addEventListener("click",function()
  {
    draw_square(get_number());
  });
  document.querySelector(".Triangle").addEventListener("click",function()
  {
    draw_triangle(get_number());
  });
  document.querySelector(".Circle").addEventListener("click",function()
  {
    draw_circle(get_number());
  });
});

function get_number()
{
    return Number(document.querySelector('input').value) || 0;
}

function draw_square(number)
{
    const drawField=document.querySelector('.Draw_Field');
    for(let i = 0; i<number; i++)
    {
        const square = document.createElement('div');
        square.classList.add('Square');
        const size = Math.random() *(250-50)+50;
        const x = Math.random() *(1700-size);
        const y = Math.random() *(700-size);
        square.style.position = 'absolute';
        square.style.left = x + 'px';
        square.style.top = y + 'px';
        square.style.width = size + 'px';
        square.style.height = size + 'px';
        square.style.backgroundColor = '#FF1A1A';
        let FirstClick = true; // первый клик
        square.addEventListener('click', function()
        {
            if(FirstClick)
            {
                square.style.backgroundColor = '#FFFF1A';
                FirstClick = false;
            } else
            {
                square.remove();
            }
        });
        drawField.appendChild(square);
    }
}

function draw_triangle(number)
{
    const drawField=document.querySelector('.Draw_Field');
    for(let i = 0; i<number; i++)
    {
        const triangle = document.createElement('div');
        triangle.classList.add('Triangle');
        const size = Math.random() *(250-50)+50;
        const x = Math.random() *(1700-size);
        const y = Math.random() *(700-size);
        triangle.style.position = 'absolute';
        triangle.style.left = x + 'px';
        triangle.style.top = y + 'px';
        triangle.style.borderLeft = size / 2 + 'px solid transparent';
        triangle.style.borderRight = size / 2 + 'px solid transparent';
        triangle.style.borderBottom = size + 'px solid #1A1AFF';
        let FirstClick = true; // первый клик
        triangle.addEventListener('click', function()
        {
            if(FirstClick)
            {
              triangle.style.backgroundColor = size + 'px solid #FFFF1A';
                FirstClick = false;
            } else
            {
              triangle.remove();
            }
        });
        drawField.appendChild(triangle);
    }
}

function draw_circle(number)
{
    const drawField=document.querySelector('.Draw_Field');
    for(let i = 0; i<number; i++)
    {
        const circle = document.createElement('div');
        circle.classList.add('Circle');
        const size = Math.random() *(250-50)+50;
        const x = Math.random() *(1700-size);
        const y = Math.random() *(700-size);
        circle.style.position = 'absolute';
        circle.style.left = x + 'px';
        circle.style.top = y + 'px';
        circle.style.width = size + 'px';
        circle.style.height = size + 'px';
        circle.style.backgroundColor = '#1A8D1A';
        circle.style.borderRadius = '50%';

        let FirstClick = true; // первый клик
        circle.addEventListener('click', function()
        {
            if(FirstClick)
            {
              circle.style.backgroundColor = '#FFFF1A';
                FirstClick = false;
            } else
            {
              circle.remove();
            }
        });
        drawField.appendChild(circle);
    }
}