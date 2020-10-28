<?php

if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) {
    die();
}

return [
    'block' => [
        'name' => 'Рекламный блок в сайдбаре',
        'section' => 'blog_detail',
    ],
    'nodes' => [
        '.sidebar-adv-link' => array(
            'name' => 'Ссылка',
            'type' => 'text',
        ),
        '.sidebar-adv-img' => array(
            'name' => 'Картинка',
            'type' => 'img',
        ),
    ],
];