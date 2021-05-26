<template>
    <div class="social-media">
        <p class="header">{{ label }}:</p>
        <ul class="media-list">
            <li>
                <a href="#" class="media-list-item">
                    <svg height="20" width="20">
                        <use :xlink:href="require(`@svg/sprites/socials.svg`) + '#facebook'" />
                    </svg>
                </a>
            </li>
            <li>
                <a href="#" class="media-list-item">
                    <svg height="20" width="20">
                        <use :xlink:href="require(`@svg/sprites/socials.svg`) + '#twitter'" />
                    </svg>
                </a>
            </li>
            <li>
                <a href="#" class="media-list-item">
                    <svg height="20" width="20">
                        <use :xlink:href="require(`@svg/sprites/socials.svg`) + '#linkedin'" />
                    </svg>
                </a>
            </li>
            <li>
                <a href="#" class="media-list-item">
                    <svg height="20" width="20">
                        <use :xlink:href="require(`@svg/sprites/socials.svg`) + '#instagram'" />
                    </svg>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'SocialMedia',
    props: {
        label: {
            type: String,
            default: ''
        }
    }

}
</script>
