let newSkills = $('ul');

$('#addSkill').on('click', function(evt) {
    let skill = $('.text').val();
    newSkills.append(`<li><button class='button'>X</button>${skill}</li>`);
    $('.text').val('');
});

newSkills.on('click', 'button', function(evt) {
    $(this).closest('li').remove();
});