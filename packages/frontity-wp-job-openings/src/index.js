import awsmJobsForm from './processors/form/form';
import awsmJobsInputFields from './processors/form/input-fields';
import awsmJobsDropdownFields from './processors/form/dropdown-fields';
import awsmJobsHiddenFields from './processors/form/hidden-fields';
import awsmJobsTextareaFields from './processors/form/textarea-fields';
import awsmJobsRecaptchaField from './processors/form/recaptcha-field';
import awsmJobsSubmitButton from './processors/form/submit-button';

import formActions from './actions/form';

export default {
  name: "@awsmin/frontity-wp-job-openings",
  state: {
    awsmjobs: {
      ajaxurl: '',
      forms: {}
    },
    source: {
      postTypes: [
        {
          type: "awsm_job_openings",
          endpoint: "awsm_job_openings",
          archive: "/jobs"
        }
      ]
    }
  },
  actions: {
    awsmjobs: { ...formActions }
  },
  libraries: {
    html2react: {
      processors: [awsmJobsForm, awsmJobsInputFields, awsmJobsDropdownFields, awsmJobsHiddenFields, awsmJobsTextareaFields, awsmJobsRecaptchaField, awsmJobsSubmitButton]
    }
  }
};