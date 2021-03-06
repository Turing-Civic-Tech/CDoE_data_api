exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('school_free_reduced_lunch', function(table) {
      table.increments('id').primary();
      table.string('school_year');
      table.decimal('frl_rate', 3, 2);
      table.string('frl_range');
      table.integer('school_id').unsigned();
      table.foreign('school_id').references('schools.id');

      table.timestamps(true, true);
    }),
    knex.schema.createTable('school_graduation_completion_gender_ethnicity', function(table) {
      table.increments('id').primary();
      table.string('school_year');
      table.integer('all_eligible_total');
      table.integer('all_grad_total');
      table.decimal('all_grad_rate', 4, 3);
      table.integer('all_completers_total');
      table.decimal('all_completion_rate', 4, 3);
      table.integer('all_female_eligible_grad_total');
      table.integer('all_females_grads_total');
      table.decimal('all_female_grad_rate', 4, 3);
      table.integer('all_female_completers_total');
      table.decimal('all_female_completion_rate', 4, 3);
      table.integer('all_male_eligible_grad_total');
      table.integer('all_male_grad_total');
      table.decimal('all_male_grad_rate', 4, 3);
      table.integer('all_male_completers_total');
      table.decimal('all_male_completion_rate', 4, 3);
      table.integer('ai_an_all_eligible_total');
      table.integer('ai_an_all_grad_total');
      table.decimal('ai_an_all_grad_rate', 4, 3);
      table.integer('ai_an_all_completers_total');
      table.decimal('ai_an_all_completion_rate', 4, 3);
      table.integer('ai_an_female_eligible_total');
      table.integer('ai_an_female_grad_total');
      table.decimal('ai_an_female_grad_rate', 4, 3);
      table.integer('ai_an_female_completers_total');
      table.decimal('ai_an_female_completion_rate', 4, 3);
      table.integer('ai_an_male_eligible_total');
      table.integer('ai_an_male_grad_total');
      table.decimal('ai_an_male_grad_rate', 4, 3);
      table.integer('ai_an_male_completers_total');
      table.decimal('ai_an_male_completion_rate', 4, 3);
      table.integer('asian_all_eligible_total');
      table.integer('asian_all_grad_total');
      table.decimal('asian_all_grad_rate', 4, 3);
      table.integer('asian_all_completers_total');
      table.decimal('asian_all_completion_rate', 4, 3);
      table.integer('asian_female_eligible_total');
      table.integer('asian_female_grad_total');
      table.decimal('asian_female_grad_rate', 4, 3);
      table.integer('asian_female_completers_total');
      table.decimal('asian_female_completion_rate', 4, 3);
      table.integer('asian_male_eligible_total');
      table.integer('asian_male_grad_total');
      table.decimal('asian_male_grad_rate', 4, 3);
      table.integer('asian_male_completers_total');
      table.decimal('asian_male_completion_rate', 4, 3);
      table.integer('b_aa_all_eligible_total');
      table.integer('b_aa_all_grad_total');
      table.decimal('b_aa_all_grad_rate', 4, 3);
      table.integer('b_aa_all_completers_total');
      table.decimal('b_aa_all_completion_rate', 4, 3);
      table.integer('b_aa_female_eligible_total');
      table.integer('b_aa_female_grad_total');
      table.decimal('b_aa_female_grad_rate', 4, 3);
      table.integer('b_aa_female_completers_total');
      table.decimal('b_aa_female_completion_rate', 4, 3);
      table.integer('b_aa_male_eligible_total');
      table.integer('b_aa_male_grad_total');
      table.decimal('b_aa_male_grad_rate', 4, 3);
      table.integer('b_aa_male_completers_total');
      table.decimal('b_aa_male_completion_rate', 4, 3);
      table.integer('l_h_all_eligible_total');
      table.integer('l_h_all_grad_total');
      table.decimal('l_h_all_grad_rate', 4, 3);
      table.integer('l_h_all_completers_total');
      table.decimal('l_h_all_completion_rate', 4, 3);
      table.integer('l_h_female_eligible_total');
      table.integer('l_h_female_grad_total');
      table.decimal('l_h_female_grad_rate', 4, 3);
      table.integer('l_h_female_completers_total');
      table.decimal('l_h_female_completion_rate', 4, 3);
      table.integer('l_h_male_eligible_total');
      table.integer('l_h_male_grad_total');
      table.decimal('l_h_male_grad_rate', 4, 3);
      table.integer('l_h_male_completers_total');
      table.decimal('l_h_male_completion_rate', 4, 3);
      table.integer('w_all_eligible_total');
      table.integer('w_all_grad_total');
      table.decimal('w_all_grad_rate', 4, 3);
      table.integer('w_all_completers_total');
      table.decimal('w_all_completion_rate', 4, 3);
      table.integer('w_female_eligible_total');
      table.integer('w_female_grad_total');
      table.decimal('w_female_grad_rate', 4, 3);
      table.integer('w_female_completers_total');
      table.decimal('w_female_completion_rate', 4, 3);
      table.integer('w_male_eligible_total');
      table.integer('w_male_grad_total');
      table.decimal('w_male_grad_rate', 4, 3);
      table.integer('w_male_completers_total');
      table.decimal('w_male_completion_rate', 4, 3);
      table.integer('nh_opi_all_eligible_total');
      table.integer('nh_opi_all_grad_total');
      table.decimal('nh_opi_all_grad_rate', 4, 3);
      table.integer('nh_opi_all_completers_total');
      table.decimal('nh_opi_all_completion_rate', 4, 3);
      table.integer('nh_opi_female_eligible_total');
      table.integer('nh_opi_female_grad_total');
      table.decimal('nh_opi_female_grad_rate', 4, 3);
      table.integer('nh_opi_female_completers_total');
      table.decimal('nh_opi_female_completion_rate', 4, 3);
      table.integer('nh_opi_male_eligible_total');
      table.integer('nh_opi_male_grad_total');
      table.decimal('nh_opi_male_grad_rate', 4, 3);
      table.integer('nh_opi_male_completers_total');
      table.decimal('nh_opi_male_completion_rate', 4, 3);
      table.integer('multi_racial_all_eligible_total');
      table.integer('multi_racial_all_grad_total');
      table.decimal('multi_racial_all_grad_rate', 4, 3);
      table.integer('multi_racial_all_completers_total');
      table.decimal('multi_racial_all_completion_rate', 4, 3);
      table.integer('multi_racial_female_eligible_total');
      table.integer('multi_racial_female_grad_total');
      table.decimal('multi_racial_female_grad_rate', 4, 3);
      table.integer('multi_racial_female_completers_total');
      table.decimal('multi_racial_female_completion_rate', 4, 3);
      table.integer('multi_racial_male_eligible_total');
      table.integer('multi_racial_male_grad_total');
      table.decimal('multi_racial_male_grad_rate', 4, 3);
      table.integer('multi_racial_male_completers_total');
      table.decimal('multi_racial_male_completion_rate', 4, 3);
      table.integer('school_id').unsigned();
      table.foreign('school_id').references('schools.id');

      table.timestamps(true, true);
    }),
    knex.schema.createTable('school_graduation_completion_ipst', function(table) {
      table.increments('id').primary();
      table.string('school_year');
      table.integer('disabled_eligible_total');
      table.integer('disabled_grad_total');
      table.decimal('disabled_grad_rate', 4, 3);
      table.integer('disabled_completers_total');
      table.decimal('disabled_completion_rate', 4, 3);
      table.integer('limited_english_proficient_eligible_total');
      table.integer('limited_english_proficient_grad_total');
      table.decimal('limited_english_proficient_grad_rate', 4, 3);
      table.integer('limited_english_proficient_completers_total');
      table.decimal('limited_english_proficient_completion_rate', 4, 3);
      table.integer('econ_disadvant_eligible_total');
      table.integer('econ_disadvant_grad_total');
      table.decimal('econ_disadvant_grad_rate', 4, 3);
      table.integer('econ_disadvant_completers_total');
      table.decimal('econ_disadvant_completion_rate', 4, 3);
      table.integer('migrant_eligible_total');
      table.integer('migrant_grad_total');
      table.decimal('migrant_grad_rate', 4, 3);
      table.integer('migrant_completers_total');
      table.decimal('migrant_completion_rate', 4, 3);
      table.integer('title_one_eligible_total');
      table.integer('title_one_grad_total');
      table.decimal('title_one_grad_rate', 4, 3);
      table.integer('title_one_completers_total');
      table.decimal('title_one_completion_rate', 4, 3);
      table.integer('homeless_eligible_total');
      table.integer('homeless_grad_total');
      table.decimal('homeless_grad_rate', 4, 3);
      table.integer('homeless_completers_total');
      table.decimal('homeless_completion_rate', 4, 3);
      table.integer('gifted_talented_eligible_total');
      table.integer('gifted_talented_grad_total');
      table.decimal('gifted_talented_grad_rate', 4, 3);
      table.integer('gifted_talented_completers_total');
      table.decimal('gifted_talented_completion_rate', 4, 3);
      table.integer('school_id').unsigned();
      table.foreign('school_id').references('schools.id');

      table.timestamps(true, true);
    }),
    knex.schema.createTable('school_cmas_ela_math', function(table) {
      table.increments('id').primary();
      table.string('school_year');
      table.string('content_type');
      table.string('test_name');
      table.integer('mean_scale_score');
      table.integer('number_met_exceeded_expectations_total');
      table.decimal('met_exceeded_expectations_rate', 4, 3);
      table.decimal('change_met_exceeded_expectations_from_previous_sy', 4, 3);
      table.integer('school_id').unsigned();
      table.foreign('school_id').references('schools.id');

      table.timestamps(true, true);
    }),
    knex.schema.createTable('school_cmas_science', function(table) {
      table.increments('id').primary();
      table.string('school_year');
      table.string('content_type');
      table.string('test_name');
      table.integer('mean_scale_score');
      table.integer('number_met_exceeded_expectations_total');
      table.decimal('met_exceeded_expectations_rate', 4, 3);
      table.decimal('change_met_exceeded_expectations_from_previous_sy', 4, 3);
      table.integer('school_id').unsigned();
      table.foreign('school_id').references('schools.id');

      table.timestamps(true, true);
    }),
    knex.schema.createTable('school_sat_psat', function(table) {
      table.increments('id').primary();
      table.string('school_year');
      table.string('test_type');
      table.integer('students_total');
      table.integer('valid_scores_total');
      table.decimal('evidence_based_reading_writing_mean_score', 4, 1);
      table.decimal('math_mean_score', 4, 1);
      table.decimal('overall_mean_score', 5, 1);
      table.decimal('participation_rate', 4, 3);
      table.integer('valid_scores_prev_year');
      table.decimal('evidence_based_reading_writing_mean_score_prev_year', 4, 1);
      table.decimal('math_mean_score_prev_year', 4, 1);
      table.decimal('overall_mean_score_prev_year', 5, 1);
      table.decimal('participation_rate_prev_year', 4, 3);
      table.decimal('mean_overall_score_change', 4, 1);
      table.integer('school_id').unsigned();
      table.foreign('school_id').references('schools.id');

      table.timestamps(true, true);
    }),
    knex.schema.createTable('school_attendance', function(table) {
      table.increments('id').primary();
      table.string('school_year');
      table.integer('student_fall_enrollment');
      table.decimal('days_in_sy', 4, 1);
      table.decimal('total_possible_attendance_days', 7, 1);
      table.decimal('total_days_attended', 7, 1);
      table.decimal('total_excused_absenses', 6, 1);
      table.decimal('total_unexcused_abasense', 6, 1);
      table.decimal('attendance_rate', 4, 3);
      table.decimal('truancy_rate', 4, 3);
      table.integer('school_id').unsigned();
      table.foreign('school_id').references('schools.id');

      table.timestamps(true, true);
    }),
    knex.schema.createTable('school_student_population', function(table) {
      table.increments('id').primary();
      table.string('school_year');
      table.integer('female_ai_an_count');
      table.integer('male_ai_an_count');
      table.integer('female_asian_count');
      table.integer('male_asian_count');
      table.integer('female_b_aa_count');
      table.integer('male_b_aa_count');
      table.integer('female_h_l_count');
      table.integer('male_h_l_count');
      table.integer('female_white_count');
      table.integer('male_white_count');
      table.integer('female_nh_opi_count');
      table.integer('male_nh_opi_count');
      table.integer('female_multi_racial_count');
      table.integer('male_multi_racial_count');
      table.integer('total_student_count');
      table.integer('school_id').unsigned();
      table.foreign('school_id').references('schools.id');

      table.timestamps(true, true);
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('school_student_population'),
    knex.schema.dropTable('school_attendance'),
    knex.schema.dropTable('school_sat_psat'),
    knex.schema.dropTable('school_cmas_science'),
    knex.schema.dropTable('school_cmas_ela_math'),
    knex.schema.dropTable('school_graduation_completion_ipst'),
    knex.schema.dropTable('school_graduation_completion_gender_ethnicity'),
    knex.schema.dropTable('school_free_reduced_lunch'),
  ]);
};
