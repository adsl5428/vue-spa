<template>
    <div>
        <div class="panel panel-defult">
            <div class="panel-body">
                <edit-profile-form></edit-profile-form>
            </div>
        </div>
    </div>
</template>

<script>
    import EditProfileForm from './EditProfileForm'

    export default {
        name:'edit-profile',
        components: {
            EditProfileForm
        }
    }
</script>
